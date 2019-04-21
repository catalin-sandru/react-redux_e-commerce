import React from 'react';
import { connect } from 'tls';

const Modal = (props) => {
  return(
    <div>
      {props.title}
    </div>
  )
}

const mapStateToProps = state => ({getItem: state.GetItem})

export default connect(mapStateToProps)(Modal)