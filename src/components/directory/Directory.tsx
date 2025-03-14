import { useReducer } from "react";

import {
  COLORS_SWATCHES,
  DEPARTMENT_DATA,
  STORE_LOCATION_DATA,
} from "../../constants";

import type { CheckboxRadioSelectData } from "../../types";

import { D3Tree } from "../d3Tree/D3Tree";
import { buildD3Tree } from "../d3Tree/utils";
import { type DirectoryAction, directoryAction } from "./actions";
import { DIRECTORY_EMPLOYEE_DATA } from "./data";
import { directoryReducer } from "./reducers";
import { initialDirectoryState } from "./state";
import type {
  DepartmentsWithDefaultKey,
  StoreLocationsWithDefaultKey,
} from "./types";
import { filterEmployees, returnIsStoreLocationDisabled } from "./utils";

function Directory() {
  const [directoryState, directoryDispatch] = useReducer(
    directoryReducer,
    initialDirectoryState,
  );
  const { department, storeLocation } = directoryState;

  const departmentData = [
    { label: "All Departments", value: "All Departments" },
    ...DEPARTMENT_DATA,
  ] as CheckboxRadioSelectData<DepartmentsWithDefaultKey>;

  // const departmentSelectInput = (
  //   <AccessibleSelectInput<
  //     DirectoryAction["setDepartment"],
  //     DepartmentsWithDefaultKey
  //   >
  //     attributes={{
  //       data: departmentData,
  //       name: "department",
  //       value: department,
  //       parentDispatch: directoryDispatch,
  //       validValueAction: directoryAction.setDepartment,
  //     }}
  //   />
  // );

  const departmentSelectInput = (
    <div>
      <label htmlFor="department">Department</label>
      <select
      defaultValue="All Departments"
        id="department"
        name="department"
        value={department}
        onChange={(e) =>
          directoryDispatch({
            action: directoryAction.setDepartment,
            payload:e.currentTarget.value as DepartmentsWithDefaultKey
          }
            )}
      >
        {departmentData.map((department) => (
          <option value={department.value}>{department.label}</option>
        ))}
      </select>
    </div>
  );

  const isStoreLocationDisabled = returnIsStoreLocationDisabled(department);
  const storeLocationData = isStoreLocationDisabled
    ? ([
      {
        label: "All Locations",
        value: "All Locations",
      },
    ] as CheckboxRadioSelectData<StoreLocationsWithDefaultKey>)
    : (STORE_LOCATION_DATA as CheckboxRadioSelectData<
      StoreLocationsWithDefaultKey
    >);

  // const storeLocationSelectInput = (
  //   <AccessibleSelectInput<
  //     DirectoryAction["setStoreLocation"],
  //     StoreLocationsWithDefaultKey
  //   >
  //     attributes={{
  //       data: storeLocationData,
  //       disabled: isStoreLocationDisabled,
  //       name: "storeLocation",
  //       value: storeLocation,
  //       parentDispatch: directoryDispatch,
  //       validValueAction: directoryAction.setStoreLocation,
  //     }}
  //   />
  // );

  const storeLocationSelectInput = (
    <div>
      <label htmlFor="storeLocation">Store Location</label>
      <select 
      defaultValue="All Locations"
      disabled={isStoreLocationDisabled}
      id="storeLocation" name="storeLocation" value={storeLocation} onChange={(e) =>
          directoryDispatch({
            action: directoryAction.setStoreLocation,
            payload:e.currentTarget.value as StoreLocationsWithDefaultKey
          }
            )}>
        {storeLocationData.map((storeLocation) => (
          <option value={storeLocation.value}>{storeLocation.label}</option>
        ))}
      </select>
    </div>
  );

  const filteredEmployees = filterEmployees({
    department,
    employees: DIRECTORY_EMPLOYEE_DATA,
    isStoreLocationDisabled,
    storeLocation,
  });

  const d3Tree = <D3Tree data={buildD3Tree(filteredEmployees, "teal")} />;

  return (
    <div>
      {departmentSelectInput}
      {storeLocationSelectInput}
      {d3Tree}
    </div>
  );
}

export default Directory;
