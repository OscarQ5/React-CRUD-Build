import { useEffect, useState } from "react";

const NewShowsList = () => {
    return (
        <div>
            <h1>Add a New Show</h1>
            <form>
                <label>
                    Id:<input type="text" name="id" /><br />
                    Type:<input type="text" name="type_of_show" /><br />
                    Title:<input type="text" name="title" /><br />
                    Country:<input type="text" name="country" /><br />
                    Release Year:<input type="number" min="1900" max="2023" name="name" /><br />
                    Rating:<input type="text" name="rating" /><br />
                    Duration:<input type="text" name="duration" /><br />
                    Genre:<input type="text" name="genre" /><br />
                    Description:<textarea type="text" name="description" /><br />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewShowsList