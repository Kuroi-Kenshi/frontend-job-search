import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import VacancyDescription from '@components/VacancyDescription';
import { closeDescription } from '@store/actions'

import s from './VacancyDescriptionModal.module.sass';

const VacancyDescriptionModal = ({ description }) => {
  const dispatch = useDispatch()
  const closeComponent = () => dispatch(closeDescription({ isOpen: false }))

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => document.body.style.overflowY = 'scroll'
  }, [])

  return (
    <>
      <div className={s.overlay} onClick={closeComponent}></div>
      <VacancyDescription description={description} />
    </>
  );
}

VacancyDescriptionModal.propTypes = {
  description: PropTypes.object
}

export default VacancyDescriptionModal;