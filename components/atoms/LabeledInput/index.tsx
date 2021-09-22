import React, { useMemo, useState } from 'react';
import { Input, InputProps } from '@chakra-ui/input';
import styles from './LabeledInput.module.css';
import { Text } from '@chakra-ui/react';

export interface ILabeledInputProp extends InputProps {
    hint?: string;
}

const LabeledInput: React.FC<ILabeledInputProp> = props => {
    const { placeholder, isInvalid, hint } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const isExpanded = useMemo(() => isFocused || isDirty, [isFocused, isDirty]);

    return (
        <div className={styles.container}>
            <div className={styles.container__input}>
                <Text
                    className={styles.input__label}
                    color={isInvalid ? 'red' : isExpanded ? 'brand.accent' : 'elements.lines'}
                    marginBottom={isExpanded ? 5 : 0}
                    fontSize={isExpanded ? 12 : 17}
                >
                    {placeholder}
                </Text>
                <Input
                    variant={'filled'}
                    height={10}
                    paddingTop={4}
                    {...props}
                    placeholder={''}
                    onChange={event => {
                        setIsDirty(!!event.target.value);
                        props.onChange?.(event);
                    }}
                    onFocus={event => {
                        setIsFocused(true);
                        props.onFocus?.(event);
                    }}
                    onBlur={event => {
                        setIsFocused(false);
                        props.onBlur?.(event);
                    }}
                />
            </div>
            <Text className={styles.container__hint} color={isInvalid ? 'red' : 'black'}>
                {hint}
            </Text>
        </div>
    );
};

export default LabeledInput;
