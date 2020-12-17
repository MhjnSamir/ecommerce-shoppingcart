import React, { CSSProperties, useRef } from "react";
import PropTypes from "prop-types";
import Select, { components, ValueType, InputActionMeta } from "react-select";
import { getTextByLanguage } from "../../utils/i18n/i18n";

/**
 * custom select styles
 */
const selectStyles: Partial<any> = {
    control: (_provided: CSSProperties, state: any) => {
        return ({
            background: state.selectProps.searchModule ? "#052354" : state['isDisabled'] ? "#e2e2e2" : "#fff",
            color: '#1a1a1a',
            display: "flex",
            width: "100%",
            height: "calc(1.3em + 0.5rem + 2px)",
            padding: "0.15rem 1.75rem 0.15rem 0.75rem",
            fontSize: "0.833rem",
            fontWeight: 400,
            lineHeight: "1.25",
            zIndex: 1200,
            verticalAlign: "middle",
            border: state.isFocused || (!state['isDisabled'] && state['selectProps'] && state['selectProps'].touched && !state['hasValue'])
                    ? "1px solid #2b91fe"
                    : "1px solid #bbbfc2",
            boxShadow: state.isFocused ? "inset 0 0 4px #1071e5" : "none",
            // borderRadius: "4px",
            appearance: "none",

            ...state.selectProps.customStyles
        })
    },
    dropdownIndicator: (provided: CSSProperties, state: any) => ({
        ...provided,
        padding: "10px 6px",
    }),
    indicatorsContainer: (provided: CSSProperties, state: any) => ({
        ...provided,
        position: "absolute",
        right: 0,
        top: 0,

    }),
    indicatorSeparator: (provided: CSSProperties) => ({
        ...provided,
        display: "none",
    }),
    clearIndicator: (provided: CSSProperties) => ({
        ...provided,
        padding: "3px 0",
        width: "14px"
    }),
    loadingIndicator: (provided: CSSProperties) => ({
        ...provided,
        color: "#000000",
        padding: "8px 4px",
        marginRight: 0,
    }),
    loadingMessage: (provided: CSSProperties) => ({
        ...provided,
        paddingTop: "4px",
        paddingBottom: "4px",
        fontSize: "0.833rem",
    }),
    menu: (provided: CSSProperties, state: any) => ({
        ...provided,
        marginTop: 0,
        marginBottom: 0,
        zIndex: 1200,
        backgroundColor: state.selectProps.searchModule ? "#052354" : provided.backgroundColor
    }),
    menuList: (provided: CSSProperties, state: any) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: state.selectProps.searchModule ? "#052354" : provided.backgroundColor,
    }),
    noOptionsMessage: (provided: CSSProperties, state: any) => ({
        ...provided,
        paddingTop: "4px",
        paddingBottom: "4px",
        fontSize: "0.833rem",
        color: state.selectProps.searchModule ? "#ACD4FF" : provided.color,
        backgroundColor: state.selectProps.searchModule && "#0da3b8"
    }),
    option: (provided: CSSProperties, { data, isSelected, selectProps, isFocused }: any) => {
        return ({
            ...provided,
            backgroundColor: (selectProps.searchModule && isSelected) ? '#0da3b8' : (selectProps.searchModule && isFocused) ? '#0da3b8' : isSelected ? "#98c1ff" : provided.backgroundColor,
            color: selectProps.searchModule ? "#ACD4FF" : data.color ? data.color : provided.color,
            fontWeight: data.color ? 800 : provided.fontWeight,
            cursor: "pointer",
            paddingTop: "4px",
            paddingBottom: "4px",
            fontSize: "0.833rem",
            '&:hover': { backgroundColor: selectProps.searchModule && '#0da3b8' },
        })
    },
    placeholder: (provided: CSSProperties, state: any) => ({
        ...provided,
        color: state.selectProps.searchModule ? '#ACD4FF' : "#666666",
    }),
    input: (provided: CSSProperties, state: any) => {
        return {}
    },
    singleValue: (provided: CSSProperties, { getValue, selectProps }: any) => ({
        ...provided,
        lineHeight: 2,
        color:
            selectProps.searchModule ? "#ACD4FF" : getValue().length && getValue()[0].color
                ? getValue()[0].color
                : '#1a1a1a',
        fontWeight:
            getValue().length && getValue()[0].color ? 800 : provided.fontWeight,
    }),
    valueContainer: (provided: CSSProperties, state: any) => ({
        ...provided,
        paddingLeft: 0,
        paddingRight: 0,
        color: state.selectProps.searchModule ? '#ACD4FF' : "#666666",
    }),
};

/**
 * Dropdown indicator element
 */
const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={8}
                viewBox="0 0 255 255"
                style={{ color: '#6c757d', fontSize: '8px' }}
            >
                <path d="M0 63.75l127.5 127.5L255 63.75z" />
            </svg>
        </components.DropdownIndicator>
    );
};

/**
 * Generic dropdown component
 */
export type OptionType = { label: string; value: number | string };
interface Props {
    touched?: boolean,
    onBlur?: (name: string, active: boolean) => any,
    placeholder?: string,
    id?: string,
    name: string,
    isSearchable?: boolean,
    isLoading?: boolean,
    isDisabled?: boolean,
    options: OptionType[],
    onChange: (name: string, event: ValueType<OptionType>) => any,
    onInputChange?: (newValue: string, actionMeta?: InputActionMeta) => any,
    value: ValueType<OptionType>,
    multi?: boolean,
    autoFocus?: boolean | undefined,
    className?: string,
    searchModule?: boolean,
    filterModule?: boolean,
    customStyles?: CSSProperties
    userCustomOption?: boolean
}
function StyledSelect(props: Props) {
    const {
        touched,
        onBlur,
        placeholder,
        id,
        name,
        isSearchable,
        isLoading,
        isDisabled,
        options,
        onChange,
        onInputChange,
        value,
        multi,
        autoFocus,
        className,
        searchModule,
        filterModule,
        customStyles,
        userCustomOption
    } = props;
    const imageDivRef = useRef([]);
    return (
        <Select
            isMulti={multi}
            onBlur={() => onBlur && onBlur(name, true)}
            placeholder={placeholder || onInputChange ? getTextByLanguage("Type to Search...", "खोजी गर्न टाइप गर्नुहोस् ...") : getTextByLanguage("Choose an Option...", "विकल्प छनौट गर्नुहोस् ...")}
            id={id}
            name={name}
            onChange={(event: ValueType<OptionType>) => event ? onChange(name, event) : onChange(name, { label: "", value: "" })}
            searchModule={searchModule}
            filterModule={filterModule}
            onInputChange={(value: string, actionMeta?: InputActionMeta) => {
                onInputChange && onInputChange(value, actionMeta);
            }}
            value={value || null}
            touched={touched}
            options={options}
            autoFocus={autoFocus}
            isSearchable={isSearchable}
            isLoading={isLoading}
            isDisabled={isDisabled}
            loadingMessage={() => "Fetching Data..."}
            components={{ DropdownIndicator }}
            styles={selectStyles}
            menuPlacement="auto"
            className={className}
            autoComplete="off"
            customStyles={customStyles || {}}
            imageDivRef={imageDivRef}
            isClearable={true}
        />
    );
}

StyledSelect.propTypes = {
    /** touched if select is dirty */
    touched: PropTypes.bool,
    /** on blur action */
    onBlur: PropTypes.func,
    /** select placeholder */
    placeholder: PropTypes.string,
    /** select id */
    id: PropTypes.string,
    /** select name for form */
    name: PropTypes.string,
    /** enable/disable search */
    isSearchable: PropTypes.bool,
    /** enable/disable data loading animation */
    isLoading: PropTypes.bool,
    /** enable/disable select */
    isDisabled: PropTypes.bool,
    /** options list */
    options: PropTypes.array.isRequired,
    /** on select change action */
    onChange: PropTypes.func,
    /** value for select */
    value: PropTypes.object || PropTypes.any,
    /** enable/disable multi select */
    multi: PropTypes.bool,
    /** enable/disable autofocus */
    autoFocus: PropTypes.bool,
    /** custom classname */
    className: PropTypes.string
};

StyledSelect.defaultProps = {
    touched: false,
    isSearchable: true,
    isLoading: false,
    isDisabled: false,
    options: [],
    multi: false,
    autoFocus: false
};

export default StyledSelect;