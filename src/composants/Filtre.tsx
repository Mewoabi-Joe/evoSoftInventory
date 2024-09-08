import { Button } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList'

const Filtre = () => {
  return (
     <Button onClick={() => console.log('clicked')} variant="outlined" endIcon={<FilterListIcon />}>Filtrer</Button>
  )
}

export default Filtre