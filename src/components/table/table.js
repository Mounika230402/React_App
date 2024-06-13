import "../../App.css"
export const TableComponent=()=>
    {
        return <table id="main">
            <RowComponent />
            <RowComponent />
            <RowComponent />
            <RowComponent />
            <RowComponent />
        </table>
    }
export const RowComponent=()=>
    {
        return <tr>
            <DataComponent></DataComponent>
            <DataComponent></DataComponent>
            <DataComponent></DataComponent>
            <DataComponent></DataComponent>
            <DataComponent></DataComponent>

        </tr>
    }
export const DataComponent=()=>
    {
        return (<td>Apple</td>,<td>Banana</td>)
    }