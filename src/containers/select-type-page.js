import { connect } from 'react-redux';
import findIndex from 'lodash/findIndex';
import { SUBMISSION_TYPES } from '../constants';
import { push } from '../actions/navigation';
import { selectSubmissionType } from '../actions/submission';
import { selectAgency } from '../routes';
import SelectTypePage from '../components/select-type-page';

const mapStateToProps = (state) => ({
  index: findIndex(SUBMISSION_TYPES, { key: state.submission.type }) || 0,
});

const mapDispatchToProps = (dispatch) => ({
  selectSubmissionType: (type) => {
    dispatch(selectSubmissionType(type));
    dispatch(push(selectAgency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTypePage);
