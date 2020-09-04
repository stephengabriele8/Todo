export const currentDateFormated = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const getYear = (date) => {
  return parseInt(date.slice(0, 4));
};

const getMonth = (date) => {
  return parseInt(date.slice(5, 7));
};

const getDay = (date) => {
  return parseInt(date.slice(8, 10));
};

export const taskCategory = {
  PAST: 0,
  TODAY: 1,
  TOMORROW: 2,
  FUTURE: 3,
};

export const determineTaskCategory = (date) => {
  const today = currentDateFormated();

  let result;

  // refactor...
  if (date === today) {
    result = taskCategory.TODAY;
  } else {
    if (getYear(date) <= getYear(today)) {
      if (getMonth(date) <= getMonth(today)) {
        if (getDay(date) < getDay(today)) {
          result = taskCategory.PAST;
        } else {
          if (getDay(date) > getDay(today) + 1) {
            result = taskCategory.FUTURE;
          } else {
            result = taskCategory.TOMORROW;
          }
        }
      } else {
        result = taskCategory.FUTURE;
      }
    } else {
      result = taskCategory.FUTURE;
    }
  }
  return result;
};
