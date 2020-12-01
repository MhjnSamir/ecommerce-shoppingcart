/**
    Reference TypeScript types declarations that are specific to this project
*/

/// <reference types="react-scripts" />

interface Window { 
    jQuery: any;
}

declare module 'react-pivottable/PivotTableUI' {
    const PivotTableUI: any;
    export default PivotTableUI;
}

declare module 'react-pivottable/TableRenderers' {
    const TableRenderers: any;
    export default TableRenderers;
}

declare module 'react-pivottable/PlotlyRenderers' {
    const PlotlyRenderers: any;
    export default PlotlyRenderers;
}