/* eslint "react/prefer-stateless-function": 0 */
/* eslint no-useless-constructor: 0 */

import { connect } from 'react-redux';
import { SUBMISSION_TYPES } from '../constants';
import { push } from '../actions/navigation';
import { selectSubmissionType } from '../actions/submission';
import { selectAgency } from '../routes';
import SelectTypePage from '../components/select-type-page';

const mapStateToProps = (state) => ({
  index: SUBMISSION_TYPES.indexOf(state.submission.type) || 0,
});

const mapDispatchToProps = (dispatch) => ({
  selectSubmissionType: (type) => (dispatch(selectSubmissionType(type))),
  nextScreen: () => (dispatch(push(selectAgency))),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTypePage);
