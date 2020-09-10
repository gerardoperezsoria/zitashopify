import React from 'react';
// import { withRouter } from 'react-router-dom';

function witRouter(Component){
    const hoc = class extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                valor: 1,
            };
        }

        render(){
            return (
                <Component
                    {...this.props}
                    history={{isHistory: true}}
                    match={{isMatch: true}}
                    location={{isLocation: true}}
                    testing={this.state.valor}
                />
            );
        }
    }

    hoc.displayName = `witRouter(${Component.displayName || Component.name})`;
    return hoc;
}

function Child(props){
    return (
        <div>
        hola Child {props.nombre}
        </div>
    )
}

export default witRouter(Child);

