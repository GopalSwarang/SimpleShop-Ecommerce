import { useEffect, useState } from 'react';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

const emptyForm = { name: '', description: '' };

function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadCategories = () => {
    setLoading(true);
    getCategories().then((response) => setCategories(response.data)).catch(() => setError('Could not load categories.')).finally(() => setLoading(false));
  };

  useEffect(() => { loadCategories(); }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      if (editingId) await updateCategory(editingId, form);
      else await createCategory(form);
      setForm(emptyForm);
      setEditingId(null);
      loadCategories();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not save category.');
    }
  };

  const editCategory = (category) => {
    setEditingId(category.id);
    setForm({ name: category.name, description: category.description || '' });
  };

  const removeCategory = async (id) => {
    if (!window.confirm('Delete this category?')) return;
    try { await deleteCategory(id); loadCategories(); } catch (err) { setError(err.response?.data?.message || 'Could not delete category.'); }
  };

  return (
    <main className="container py-5">
      <div className="mb-4"><h1 className="section-title mb-1">Category Management</h1><p className="text-secondary mb-0">Add, edit and delete product categories.</p></div>
      <ErrorMessage message={error} />
      <div className="row g-4 align-items-start">
        <div className="col-lg-5">
          <form onSubmit={handleSubmit} className="card border-0 shadow-sm"><div className="card-body p-4">
            <h5>{editingId ? 'Edit Category' : 'Add Category'}</h5>
            <div className="mb-3"><label className="form-label">Name</label><input className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
            <div className="mb-3"><label className="form-label">Description</label><textarea className="form-control" rows="4" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea></div>
            <button className="btn btn-primary">{editingId ? 'Update Category' : 'Add Category'}</button>
            {editingId && <button type="button" className="btn btn-link" onClick={() => { setEditingId(null); setForm(emptyForm); }}>Cancel</button>}
          </div></form>
        </div>
        <div className="col-lg-7">
          {loading ? <Loading /> : <div className="table-responsive bg-white rounded-4 shadow-sm"><table className="table align-middle mb-0"><thead className="table-light"><tr><th>ID</th><th>Name</th><th>Description</th><th>Actions</th></tr></thead><tbody>{categories.map((category) => <tr key={category.id}><td>{category.id}</td><td className="fw-semibold">{category.name}</td><td>{category.description}</td><td><div className="d-flex gap-2"><button className="btn btn-sm btn-outline-primary" onClick={() => editCategory(category)}>Edit</button><button className="btn btn-sm btn-outline-danger" onClick={() => removeCategory(category.id)}>Delete</button></div></td></tr>)}</tbody></table></div>}
        </div>
      </div>
    </main>
  );
}

export default AdminCategories;
