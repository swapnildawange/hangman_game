import React from 'react'
import ManSvg from '../svg/ManSvg'

export default function Man({ attemptNumber }) {
  return (
    <div>
      <ManSvg attemptNumber={attemptNumber} />
    </div>
  );
}
