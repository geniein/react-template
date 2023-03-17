//
import Button from './Button';
import Tooltip from './Tooltip';


// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme:any) {
  return Object.assign(    
    Button(theme),
    Tooltip(theme)    
  );
}
