import React, { Fragment } from 'react';
import {  FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup } from 'react-bootstrap';

function createMarkup(html) {
    return {__html: html};
}

const FieldGroup = ({id, label, help, inputGroupIcon, ...props}) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            {(() => {
                if (inputGroupIcon) {
                    return (
                        <InputGroup>
                            <InputGroup.Addon dangerouslySetInnerHTML={createMarkup(inputGroupIcon)} />
                            <FormControl {...props} />
                            {help && <HelpBlock>{help}</HelpBlock>}
                        </InputGroup>
                    )
                } else {
                    return (
                        <Fragment>
                            <FormControl {...props} />
                            {help && <HelpBlock>{help}</HelpBlock>}
                        </Fragment>
                    )
                }
            })()}
        </FormGroup>
    );
};

export default FieldGroup;