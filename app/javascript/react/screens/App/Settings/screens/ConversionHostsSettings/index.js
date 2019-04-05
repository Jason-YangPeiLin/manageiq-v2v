import { connect } from 'react-redux';
import ConversionHostsSettings from './ConversionHostsSettings';

import { fetchProvidersAction } from '../../../../../../redux/common/providers/providersActions';
import {
  fetchConversionHostsAction,
  fetchConversionHostTasksAction,
  showConversionHostWizardAction,
  setHostToDeleteAction,
  deleteConversionHostAction,
  showConversionHostDeleteModalAction,
  hideConversionHostDeleteModalAction
} from '../../SettingsActions';

import { getCombinedConversionHostListItems } from '../../helpers';

const mapStateToProps = (
  {
    providers: { isFetchingProviders, hasSufficientProviders },
    settings: {
      conversionHosts,
      conversionHostTasks,
      conversionHostTasksByResource,
      conversionHostWizardMounted,
      conversionHostDeleteModalVisible,
      conversionHostToDelete,
      isDeletingConversionHost
    }
  },
  ownProps
) => ({
  isFetchingProviders,
  hasSufficientProviders,
  combinedListItems: getCombinedConversionHostListItems(
    conversionHosts,
    conversionHostTasks,
    conversionHostTasksByResource
  ),
  conversionHostWizardMounted,
  conversionHostDeleteModalVisible,
  conversionHostToDelete,
  isDeletingConversionHost,
  ...ownProps.data
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign(stateProps, ownProps.data, dispatchProps);

export default connect(
  mapStateToProps,
  {
    fetchProvidersAction,
    fetchConversionHostsAction,
    fetchConversionHostTasksAction,
    showConversionHostWizardAction,
    setHostToDeleteAction,
    deleteConversionHostAction,
    showConversionHostDeleteModalAction,
    hideConversionHostDeleteModalAction
  },
  mergeProps
)(ConversionHostsSettings);
