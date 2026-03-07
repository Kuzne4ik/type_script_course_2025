import type { ChangeEvent, SubmitEvent, KeyboardEvent } from "react";

export function SearchBar() {

    function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
        const query = e.target.value;
        // Поиск
        console.log("Query: ", query)

    }


    function handleSubmit(e: SubmitEvent<HTMLFormElement>): void {
        e.preventDefault();
        
        
    }

    

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
        if (e.key == 'Enter'){
            // Enter
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleSearch}
            onKeyDown={handleKeyDown}
            placeholder="Search tracks...">
                
            </input>
        </form>
    )

}