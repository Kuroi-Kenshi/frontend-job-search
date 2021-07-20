export const getRequestUrl = (formData) => {
  const { location, schedule, employment, experience, salary } = formData;

  const url = salary
    ? `https://api.hh.ru/vacancies?text=frontend%20${location}
                            &experience=${experience}
                            &schedule=${schedule}
                            &employment=${employment}
                            &salary=${salary}
                            &only_with_salary=true
                            &per_page=100`
    : `https://api.hh.ru/vacancies?text=frontend%20${location}
                            &experience=${experience}
                            &schedule=${schedule}
                            &employment=${employment}
                            &per_page=100`;
  return url;
};
