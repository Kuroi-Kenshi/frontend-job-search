import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '@store/actions'
import s from './SearchBar.module.sass';


const SearchBar = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        location: '',
        schedule: 'fullDay',
        employment: 'full',
        experience: 'between1And3',
        salary: '',
    });

    const [scheduleForm, setScheduleForm] = useState({
        isOpen: false,
        activeTitle: 'Полный день'
    })
    const [employmentForm, setEmploymentForm] = useState({
        isOpen: false,
        activeTitle: 'Полная занятость'
    })
    const [experienceForm, setExperienceForm] = useState({
        isOpen: false,
        activeTitle: 'От 1 года до 3 лет'
    })


    const setRadioTitle = (e) => {
        // e.stopPropagation()

        if(e.target.name === 'schedule') {
            console.log(e);
            const title = e.target.labels[0].lastChild.textContent 
            setScheduleForm(prev => ({...prev, activeTitle: title}))
        }

        if ( e.target.name === 'employment') {
            const title = e.target.labels[0].lastChild.textContent 
            setEmploymentForm(prev => ({...prev, activeTitle: title}))
        }

        if ( e.target.name === 'experience') {
            const title = e.target.labels[0].lastChild.textContent 
            setExperienceForm(prev => ({...prev, activeTitle: title}))
        }

    }
    
    const addDataToFormData = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const openCloseForm = (e) => {
        e.stopPropagation()
        const targetId = e.target.id
        if (targetId === 'scheduleBtn') {
            setScheduleForm(prev => ({...prev, isOpen: !scheduleForm.isOpen}))
        }
        if (targetId === 'employmentBtn') {
            setEmploymentForm(prev => ({...prev, isOpen: !employmentForm.isOpen}))
        }
        if(targetId === 'experienceBtn') {
            setExperienceForm(prev => ({...prev, isOpen: !experienceForm.isOpen}))
        }

    }

    const setFormDataState = (e) => {
        e.preventDefault()
        scheduleForm.isOpen && setScheduleForm(prev => ({...prev, isOpen: false}))
        employmentForm.isOpen && setEmploymentForm(prev => ({...prev, isOpen: false}))
        experienceForm.isOpen && setExperienceForm(prev => ({...prev, isOpen: false}))
        dispatch(addFormData(formData))
        setFormData(prev => ({...prev, location: '', salary: ''}))
    }

  return (
      <section className={s.wrapper}>
          <form action="" onClick={setRadioTitle}>
              <ul className={s.filter}>
                  <li className={`${s.filter__item} ${s.location}`}>
                    <input type='text' name='location' placeholder='Город' value={formData.location} className={s.filter__input} onChange={addDataToFormData} required/>
                  </li>
                  <li className={`${s.filter__item} ${s.schedule}`}>
                    <button type='button' className={s.filter__button} id='scheduleBtn' onClick={openCloseForm}>{scheduleForm.activeTitle}</button>
                    <div className={`${s.dropdownForm} `} >                        
                        <label className={s.radio} >
                            <input className={s.radio__input} type="radio" name="schedule" value='fullDay' checked={formData.schedule === 'fullDay'} onChange={addDataToFormData} />
                            <span className={s.radio__icon} ></span>
                            Полный день
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="schedule" value='flexible' checked={formData.schedule === 'flexible'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Гибкий график
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="schedule" value='remote' checked={formData.schedule === 'remote'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Удаленная работа
                        </label>
                    </div>
                  </li>
                  <li className={`${s.filter__item} ${s.employment}`}>
                    <button type='button' className={s.filter__button} id='employmentBtn' onClick={openCloseForm}>{employmentForm.activeTitle}</button>
                    <div className={`${s.dropdownForm} ${employmentForm.isOpen && s.active}`}>                        
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="employment" value='full' checked={formData.employment === 'full'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Полная занятость
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="employment" value='part' checked={formData.employment === 'part'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Частичная занятость
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="employment" value='project' checked={formData.employment === 'project'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Проектная работа
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="employment" value='probation' checked={formData.employment === 'probation'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Стажировка
                        </label>
                    </div>
                  </li>
                  <li className={`${s.filter__item} ${s.experience}`}>
                    <button type='button' className={s.filter__button} id='experienceBtn' onClick={openCloseForm}>{experienceForm.activeTitle}</button>
                    <div className={`${s.dropdownForm} ${experienceForm.isOpen && s.active}`}>                        
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="experience" value='noExperience' checked={formData.experience === 'noExperience'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Нет опыта
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="experience" value='between1And3' checked={formData.experience === 'between1And3'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            От 1 года до 3 лет
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="experience" value='between3And6' checked={formData.experience === 'between3And6'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            От 3 года до 6 лет
                        </label>
                        <label className={s.radio}>
                            <input className={s.radio__input} type="radio" name="experience" value='moreThan6' checked={formData.experience === 'moreThan6'} onChange={addDataToFormData} />
                            <span className={s.radio__icon}></span>
                            Более 6 лет
                        </label>
                    </div>
                  </li>
                  <li className={`${s.filter__item} ${s.salary}`}>
                    <input type='text' name='salary' placeholder='Уровень дохода' value={formData.salary} className={s.filter__input} onChange={addDataToFormData} required/>
                  </li>
                  <li className={`${s.filter__item} ${s.submit_btn}`}>
                    <button type='submit' className={s.filter__button} onClick={setFormDataState}>Поиск</button>
                  </li>
              </ul>
          </form>
      </section>
  );
}

export default SearchBar;