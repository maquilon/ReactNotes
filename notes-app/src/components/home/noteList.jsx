import React from 'react';

const NoteList = (props) => {
    const list = props.notes.get('notes').map((note, i) => {
        let tagList = '';

        note.get('tags').forEach(element => {
            tagList = tagList + element.get('tag') + ', ';
            return tagList;
        });

        return (
            <tr key={i}>
                <td>{note.get('title')}</td>
                <td>{note.get('description')}</td>
                <td>{ tagList }</td>
            </tr>)
    })

    return (
        <table className="table table-hover table-sm table-bordered">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tags</th>
                </tr>
            </thead>
            <tbody>
                { list }
            </tbody>
        </table>
    )
}

export default NoteList

