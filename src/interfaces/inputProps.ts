import { 
    ChangeEventHandler, 
    ReactNode 
} from "react";
import { option } from "./SelectInputProps";
import { 
    valuesState, 
    errors 
} from "./useFormTypes";
import { SelectChangeEvent } from "@mui/material";

export type inputProps = {
    inputType: string,
    xs?: 'auto' | number | boolean,
    sm?: 'auto' | number | boolean,
    md?: 'auto' | number | boolean,
    lg?: 'auto' | number | boolean,
    xl?: 'auto' | number | boolean,
    gridItemZeroMinWidth?: boolean,
    id: string,
    labelText: string,
    name: string,
    autoComplete?: string,
    helperMessage?: string,
    autoFocus?: boolean,
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning",
    disabled?: boolean,
    endAdornment?: ReactNode,
    fullWidth?: boolean,
    placeholder? : string,
    readOnly?: boolean,
    required?: boolean,
    startAdornment?: ReactNode,
    type?: string,
    margin?: "none" | "dense",
    minRows?: string | number,
    maxRows?: string | number,
    rows?: string | number,
    size?: "small" | "medium",
    options?: option[],
    autoWidth?: boolean,
    defaultOpen?: boolean,
    multiple?: boolean,
    render?: (props: {
         values?: valuesState,
        onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
        onSelect?: (event: SelectChangeEvent<any>, child: ReactNode) => void,
        errors?: errors
    }) => ReactNode,
};