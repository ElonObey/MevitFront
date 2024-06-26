import { Paper } from '@mui/material'
import React from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export default function VoidImagePaper() {
  return (
    <Paper sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0000008F'}}>
        <CropOriginalIcon sx={{width: '128px', height:'128px', color: '#ffff'}}/>
    </Paper>
  )
}
