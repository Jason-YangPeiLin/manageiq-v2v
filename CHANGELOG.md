# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)


## Hammer-7

### Added
- Enable (un-hide) the Conversion Hosts tab of the Settings page [(#922)](https://github.com/ManageIQ/manageiq-v2v/pull/922)
- Add Download Log action to conversion host list items that creates a file from context_data [(#948)](https://github.com/ManageIQ/manageiq-v2v/pull/948)
- Add option to sort plans by Completed time, and fix alignment in plan list views [(#934)](https://github.com/ManageIQ/manageiq-v2v/pull/934)

### Fixed
- Mapping Wizard: filter datastores to only those with storage_domain_type === 'data' [(#947)](https://github.com/ManageIQ/manageiq-v2v/pull/947)
- Add OpenStack Trusted CA Certificates field to Conversion Host Wizard [(#952)](https://github.com/ManageIQ/manageiq-v2v/pull/952)
- Prevent migration task info popovers with long error messages from being pushed off the screen [(#962)](https://github.com/ManageIQ/manageiq-v2v/pull/962)

## Hammer-5 - Released 2019-04-23

### Added
- Use conversion_hosts API for RHV target cluster warnings instead of host CF tags [(#847)](https://github.com/ManageIQ/manageiq-v2v/pull/847)
- Rename Concurrent Migrations to Migration Throttling [(#892)](https://github.com/ManageIQ/manageiq-v2v/pull/892)
- Add info popover to broken infra mapping error icons [(#906)](https://github.com/ManageIQ/manageiq-v2v/pull/906)
- Phase 2 of vertical menu fixes [(#822)](https://github.com/ManageIQ/manageiq-v2v/pull/822)
- Add 'Status Detail' enhanced error message to info popover on a migration task [(#918)](https://github.com/ManageIQ/manageiq-v2v/pull/918)
- Plan Wizard VMs Step - VMWare Folder View [(#917)](https://github.com/ManageIQ/manageiq-v2v/pull/917)
- Add new options for migration throttling [(#897)](https://github.com/ManageIQ/manageiq-v2v/pull/897)
- Rename Concurrent Migrations to Migration Throttling [(#892)](https://github.com/ManageIQ/manageiq-v2v/pull/892)
- Add "Flavor" and "Security Group" CSV columns and associated warnings [(#845)](https://github.com/ManageIQ/manageiq-v2v/pull/845)

### Fixed
- Prevent Settings form from being destroyed on unmount [(#839)](https://github.com/ManageIQ/manageiq-v2v/pull/839)
- Edit Plan: fetch correct status of pre-selected VMs using VM validation service [(#841)](https://github.com/ManageIQ/manageiq-v2v/pull/841)
- Fix breadcrumb bars to be consistent with the rest of CloudForms [(#925)](https://github.com/ManageIQ/manageiq-v2v/pull/925)
- Migration Plans in Progress page: fix error with deleted target provider [(#923)](https://github.com/ManageIQ/manageiq-v2v/pull/923)
- Fix call to transformation_log_queue [(#926)](https://github.com/ManageIQ/manageiq-v2v/pull/926)
- Filter cloud_tenants to Openstack providers explicitly (prevents errors with RHV-4.3 providers) [(#920)](https://github.com/ManageIQ/manageiq-v2v/pull/920)

## Hammer-4 - Released 2019-03-29

### Added
- V2v specify migration log type [(#887)](https://github.com/ManageIQ/manageiq-v2v/pull/887)
- Add Virt-v2v-wrapper log download menu item [(#888)](https://github.com/ManageIQ/manageiq-v2v/pull/888)
- Set backdrop='static' on all modals to prevent accidentally closing them [(#844)](https://github.com/ManageIQ/manageiq-v2v/pull/844)

### Fixed
- Fetch providers first [(#849)](https://github.com/ManageIQ/manageiq-v2v/pull/849)
