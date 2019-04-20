import React from 'react';
import { connect } from 'tls';

const Modal = ({title, img}) => {
  return(
    <div>
      {title}
    </div>
  )
}

const mapStateToProps = state = ({getItem: state.GetItem})

export default connect(mapStateToProps)(Modal)