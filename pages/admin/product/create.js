import React from 'react';

export default function create() {
  const [name, setName] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));

  const onSubmit = (event) => {
    event.preventDefault();
    httpRequest({
      method: 'post',
      url: `/category/create/${user._id}`,
      data: {
        name: name,
      },
    }).then((res) => {
      if (res.data) {
        // localStorage.setItem('token', 'Bearer ' + res.data.token);
        // localStorage.setItem('user', JSON.stringify(res.data.user));
        // history.push()
        // props.history.push('/admin/dashboard');
      }
    });
  };
  return (
    <form>
      <div className="form-group text-left">
        <label className=" " htmlFor="category">
          Enter Category Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
          placeholder="Ex. Summer Collection"
        ></input>
        <button onClick={onSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
