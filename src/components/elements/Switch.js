import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches({status, handleSwitch, id}) {
  const [state, setState] = React.useState({
    checked: status,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    handleSwitch(id, event)
  };

  return (
    <div>
      <Switch
        checked={state.checked}
        onChange={handleChange('checked')}
        value="checked"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}

// import React,{ Component } from 'react'

// export default function switcheo(estado, WrappedComponent) {
//   return class extends Component {
//     constructor(props) {
//       super(props)
//       this.state = { data: [] }
//     }

//     // componentDidMount() {
//     //   fetch(endpoint)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //       this.setState({ data })
//     //     })
//     //     .catch(err => console.log(err.message))
//     // }

//     render() {
//       return <WrappedComponent data={this.state.data} {...this.props} />
//     }
//   }
// }