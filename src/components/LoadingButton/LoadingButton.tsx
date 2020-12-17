import React, { PureComponent, CSSProperties, MouseEvent, Ref } from 'react'

import './loading-theme.scss';

export type ButtonTypeProps = 'button' | 'submit' | 'reset' | undefined

export interface LoadingButtonProps {
    forwardedRef?: Ref<any>;
    type?: ButtonTypeProps;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLButtonElement> | any) => void | any;
    disabled?: boolean;
    loading?: boolean;
    text?: any;
    title?: string;
}

export default class LoadingButton extends PureComponent<LoadingButtonProps> {
    render() {
        const {forwardedRef, type, className, style, onClick, disabled, loading, text, title, ...args} = this.props;

        return (
            <button
                {...args}
                ref={forwardedRef}
                type={type || "button"}
                className={className}
                style={{...style}}
                disabled={disabled}
                onClick={onClick}
                title={title}
            >
                {this.props.children ?
                    loading ?
                        <div className={loading ? "loading" : ""}>
                            <div>{this.props.children}</div>
                            {loading && <div className="spinner"></div>}
                        </div>
                        :
                        this.props.children
                    :
                    <div className={loading ? "loading" : ""}>
                        <div>{text}</div>
                        {loading && <div className="spinner"></div>}
                    </div>
                }
            </button>
        )
    }
}