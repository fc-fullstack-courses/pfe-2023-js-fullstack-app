// створили перелічення (enum) для типів екшенів
// щоб використовувати його як джерело істини
// для редюсерів та екшенів
const ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CHANGE_STEP: 'changeStep'
}

export default ACTION_TYPES;