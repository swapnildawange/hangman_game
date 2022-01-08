import React from 'react'

function getMaxHints(word) {
    let len = word.length
    let maxHints = Math.ceil(len / 4);
    return maxHints
}

export default getMaxHints
