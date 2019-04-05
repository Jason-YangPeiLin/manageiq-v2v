import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListView, Toolbar } from 'patternfly-react';
import ListViewToolbar from '../../../../common/ListViewToolbar/ListViewToolbar';
import ConversionHostsListItem from './ConversionHostsListItem';
import DeleteConversionHostConfirmationModal from './DeleteConversionHostConfirmationModal';

const ConversionHostsList = ({
  combinedListItems,
  conversionHostToDelete,
  deleteConversionHostAction,
  deleteConversionHostActionUrl,
  hideConversionHostDeleteModalAction,
  setHostToDeleteAction,
  conversionHostDeleteModalVisible,
  showConversionHostDeleteModalAction,
  isDeletingConversionHost
}) => (
  <React.Fragment>
    <ListViewToolbar
      filterTypes={ConversionHostsList.filterTypes}
      sortFields={ConversionHostsList.sortFields}
      listItems={combinedListItems}
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
              {filteredSortedPaginatedListItems.items.map(listItem => {
                const { isTask } = listItem.meta;
                const itemKey = `conversion-host-${isTask ? 'task-' : ''}${listItem.id}`;
                return (
                  <ConversionHostsListItem
                    key={itemKey}
                    listItem={listItem}
                    isTask={isTask}
                    setHostToDeleteAction={setHostToDeleteAction}
                    showConversionHostDeleteModalAction={showConversionHostDeleteModalAction}
                  />
                );
              })}
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
      hideConversionHostDeleteModalAction={hideConversionHostDeleteModalAction}
      conversionHostDeleteModalVisible={conversionHostDeleteModalVisible}
      isDeletingConversionHost={isDeletingConversionHost}
    />
  </React.Fragment>
);

ConversionHostsList.propTypes = {
  combinedListItems: PropTypes.arrayOf(PropTypes.object),
  conversionHostToDelete: PropTypes.object,
  deleteConversionHostAction: PropTypes.func,
  deleteConversionHostActionUrl: PropTypes.string,
  hideConversionHostDeleteModalAction: PropTypes.func,
  setHostToDeleteAction: PropTypes.func,
  conversionHostDeleteModalVisible: PropTypes.bool,
  showConversionHostDeleteModalAction: PropTypes.func,
  isDeletingConversionHost: PropTypes.bool
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
