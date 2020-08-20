import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return (
            <div style={{ marginTop: 13 }}>
                <h2>Listar Disciplina</h2>
                    <table className="table table-striped" style={{ marginTop: 16 }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Capacidade</th>
                            </tr>
                        </thead>
                        
                    </table>
                    </div>
        )
    }
}