import React from "react";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";

function SearchInput () {

  return (
      <MDBRow className="justify-content-center mb-1 mt-4">
         <MDBCol md="6" className='text-center'>
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                <span className="input-group-text red lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                </span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
            </div>
         </MDBCol>
      </MDBRow>
  );
}

export default SearchInput;