import * as R from 'ramda';
import { createSelector } from 'reselect';

const getCurrentFilter = state => state.filter;
const getTodoList = state => state.list;

export const getFilteredList = createSelector(
  [getCurrentFilter, getTodoList],
  (filter, list) => {
    // console.log(`selector: ${(new Date()).getTime() - window.startTime}ms`);

    switch (filter) {
      case 'finished':
        // return list.filter(item => item.done);
        return R.filter(R.prop('done'), list);
      case 'unfinished':
        // return list.filter(item => !item.done);
        return R.filter(R.compose(R.not, R.prop('done')), list);
      default:
        return list;
    }
  }
);

// export const getFilteredList = ({ filter, list }) => {
//   // console.log(`selector (no memo): ${(new Date()).getTime() - window.startTime}ms`);
//
//   switch (filter) {
//     case 'finished':
//       // return list.filter(item => item.done);
//       return R.filter(R.prop('done'), list);
//     case 'unfinished':
//       // return list.filter(item => !item.done);
//       return R.filter(R.compose(R.not, R.prop('done')), list);
//     default:
//       return list;
//   }
// };
