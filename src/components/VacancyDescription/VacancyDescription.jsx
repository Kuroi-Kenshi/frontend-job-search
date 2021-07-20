import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import NoLogo from '@components/NoLogo'
import { closeDescription } from '@store/actions'
import useWindowDimensions from '@hooks/useWindowDimensions'

import closeBtn from './icons/close.svg'
import s from './VacancyDescription.module.sass';

const VacancyDescription = ({description}) => {
    const dispatch = useDispatch()
    const currency = description?.salary?.currency === 'RUR' ? 'руб' 
                    : description?.salary?.currency === 'USD' ? 'USD' 
                    : 'EUR'
    const windowWidth = useWindowDimensions().width
    const tabletBreakpoint = 1025
    const getSalary = () => {
        const salaryFrom = description?.salary?.from
        const salaryTo = description?.salary?.to

        if(salaryFrom && salaryTo) {
            return `От ${salaryFrom} до ${salaryTo} ${currency}`
        }
        if(salaryFrom && !salaryTo) {
            return `От ${salaryFrom} ${currency}`
        }
        if(!salaryFrom && salaryTo) {
            return `До ${salaryTo} ${currency}`
        }
    }

    const closeComponent = () => {
        dispatch(closeDescription({isOpen: false}))
    }
    

    useEffect(() => {
        document.getElementById('info').scrollTop = 0    
    }, [description])

  return (
    <div className={s.vacancyInfo} id='info'>
        <header className={s.header}>
        {description?.employer?.logo_urls ? <img src={description.employer.logo_urls[240]} alt='Company Logo' className={s.header__logo}/> : <NoLogo size={240} />}
            <div className={s.vacancyInfo__title}>
                <h2 className={s.vacancyInfo__positionName}>{description?.name}</h2>
                <div className={s.vacancyInfo__company}>
                    <span className={s.vacancyInfo__companyName}>{description?.employer.name}</span>
                    {description?.address?.city ? <span className={s.vacancyInfo__location}>{description.address.city}</span> : ''}
                </div>
            </div>
            { windowWidth <= tabletBreakpoint ? 
            <img className={s.vacancyInfo__closeBtn} src={closeBtn} alt="Close Button" onClick={closeComponent}/> 
             : null }
        </header>
        <div className={s.vacancyInfo__salary}>{getSalary()}</div>
        <hr className={s.horisontalLine}/>
        <div className={s.vacancyInfo__descr}>
            {ReactHtmlParser(description?.description)}
        </div>
    </div>
  );
}

VacancyDescription.propTypes = {
    description: PropTypes.object
}

export default VacancyDescription;