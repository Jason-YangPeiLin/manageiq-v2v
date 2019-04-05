import React from 'react';
import PropTypes from 'prop-types';
import { DropdownKebab, Grid, ListView, MenuItem, Toolbar } from 'patternfly-react';
import ListViewToolbar from '../../../../common/ListViewToolbar/ListViewToolbar';
import ConversionHostRemoveButton from './ConversionHostRemoveButton';
import DeleteConversionHostConfirmationModal from './DeleteConversionHostConfirmationModal';
import StopPropagationOnClick from '../../../../common/StopPropagationOnClick';

const ConversionHostsList = ({
  conversionHosts,
  conversionHostToDelete,
  deleteConversionHostAction,
  deleteConversionHostActionUrl,
  fetchConversionHostsAction,
  fetchConversionHostsUrl,
  hideConversionHostDeleteModalAction,
  setHostToDeleteAction,
  showConversionHostDeleteModal,
  showConversionHostDeleteModalAction
}) => (
  <React.Fragment>
    <ListViewToolbar
      filterTypes={ConversionHostsList.filterTypes}
      sortFields={ConversionHostsList.sortFields}
      listItems={conversionHosts}
    >
      {({
        filteredSortedPaginatedListItems,
        renderFilterControls,
        renderSortControls,
        renderActiveFilters,
        renderPaginationRow
      }) => (
        <React.Fragment>
          <Grid.Row>
            <Toolbar>
              {renderFilterControls()}
              {renderSortControls()}
              {renderActiveFilters(filteredSortedPaginatedListItems)}
            </Toolbar>
          </Grid.Row>
          <div style={{ overflow: 'auto', paddingBottom: 300, height: '100%' }}>
            <ListView className="conversion-hosts-list" id="conversion_hosts">
              {filteredSortedPaginatedListItems.items.map((host, n) => (
                <ListView.Item
                  key={host.id}
                  heading={host.name}
                  stacked
                  actions={
                    <div>
                      <ConversionHostRemoveButton
                        host={host}
                        setHostToDeleteAction={setHostToDeleteAction}
                        showConversionHostDeleteModalAction={showConversionHostDeleteModalAction}
                      />
                      <StopPropagationOnClick>
                        <DropdownKebab id="conversion-list-kebab" pullRight>
                          <MenuItem>{__('Download Log')}</MenuItem>
                        </DropdownKebab>
                      </StopPropagationOnClick>
                    </div>
                  }
                />
              ))}
            </ListView>
            {renderPaginationRow(filteredSortedPaginatedListItems)}
          </div>
        </React.Fragment>
      )}
    </ListViewToolbar>

    <DeleteConversionHostConfirmationModal
      conversionHostToDelete={conversionHostToDelete}
      deleteConversionHostAction={deleteConversionHostAction}
      deleteConversionHostActionUrl={deleteConversionHostActionUrl}
      fetchConversionHostsAction={fetchConversionHostsAction}
      fetchConversionHostsUrl={fetchConversionHostsUrl}
      hideConversionHostDeleteModalAction={hideConversionHostDeleteModalAction}
      showConversionHostDeleteModal={showConversionHostDeleteModal}
    />
  </React.Fragment>
);

ConversionHostsList.propTypes = {
  conversionHosts: PropTypes.arrayOf(PropTypes.object),
  conversionHostToDelete: PropTypes.object,
  deleteConversionHostAction: PropTypes.func,
  deleteConversionHostActionUrl: PropTypes.string,
  fetchConversionHostsAction: PropTypes.func,
  fetchConversionHostsUrl: PropTypes.string,
  hideConversionHostDeleteModalAction: PropTypes.func,
  setHostToDeleteAction: PropTypes.func,
  showConversionHostDeleteModal: PropTypes.bool,
  showConversionHostDeleteModalAction: PropTypes.func
};

ConversionHostsList.sortFields = [
  {
    id: 'name',
    title: __('Name'),
    isNumeric: false
  }
];

ConversionHostsList.filterTypes = [
  {
    id: 'name',
    title: __('Name'),
    placeholder: __('Filter by Name'),
    filterType: 'text'
  }
];

export default ConversionHostsList;
