import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const positions = [
    { value: "CEO", label: "CEO" },
    { value: "CTO", label: "CTO" },
    { value: "CMO", label: "CMO" },
    { value: "Product Owner", label: "Product Owner" },
    { value: "SCRUM Master", label: "SCRUM Master" },
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Driver", label: "Driver" },
    { value: "Chef", label: "Chef" },
];

const Employee = () => {
    const [modal, setModal] = useState(false);
    const [employees, setEmployees] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            age: 30,
            position: "Software Engineer",
            salary: 20000,
        },
    ]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const [firstName, lastName, age, position, salary] =
            evt.target.elements;

        setEmployees([
            ...employees,
            {
                id: employees.length + 1,
                firstName: firstName.value,
                lastName: lastName.value,
                age: age.value,
                position: position.value,
                salary: salary.value,
            },
        ]);

        setModal(false);
        evt.target.reset();
    };

    const handleDelete = (id) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    return (
        <>
            <div className='row'>
                <div className='col-12 my-5'>
                    <button
                        className='btn btn-primary ms-auto d-block'
                        onClick={() => setModal(true)}>
                        Add
                    </button>
                </div>
                {employees.length > 0 && (
                    <div className='col-12'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Age</th>
                                    <th>Position</th>
                                    <th>Salary</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((emp) => (
                                    <tr key={emp.id}>
                                        <td>{emp.firstName}</td>
                                        <td>{emp.lastName}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.position}</td>
                                        <td>
                                            ${Number(emp.salary).toFixed(2)}
                                        </td>
                                        <td className='d-flex justify-content-end'>
                                            <button
                                                className='btn btn-outline-danger me-2'
                                                onClick={() =>
                                                    handleDelete(emp.id)
                                                }>
                                                Delete
                                            </button>
                                            <button className='btn btn-outline-primary'>
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total:</td>
                                    <td>{employees.length}</td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        $
                                        {employees
                                            .reduce(
                                                (acc, cur) =>
                                                    acc + Number(cur.salary),
                                                0
                                            )
                                            .toFixed(2)}
                                    </td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
            </div>

            <Modal isOpen={modal} size='lg' toggle={() => setModal(false)}>
                <ModalHeader>
                    <p className='h2'>Add a new employees</p>
                </ModalHeader>
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        <div className='mb-3'>
                            <label htmlFor='firstName' className='form-label'>
                                FirstName
                            </label>
                            <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='lastName' className='form-label'>
                                LastName
                            </label>
                            <input
                                id='lastName'
                                type='text'
                                name='lastName'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='age' className='form-label'>
                                Age
                            </label>
                            <input
                                id='age'
                                type='number'
                                name='age'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='position' className='form-label'>
                                Position
                            </label>
                            <select
                                id='position'
                                className='form-select'
                                name='position'>
                                <option value=''>Choose position</option>
                                {positions.map((position) => (
                                    <option
                                        key={position.value}
                                        value={position.value}>
                                        {position.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='salary' className='form-label'>
                                Salary
                            </label>
                            <input
                                id='salary'
                                type='number'
                                name='salary'
                                className='form-control'
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            className='btn btn-secondary'
                            onClick={() => setModal(false)}>
                            Cancel
                        </button>
                        <button className='btn btn-primary'>Save</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    );
};

export default Employee;
