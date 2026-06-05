"use client";
import { Users, AlertTriangle, FileText, CheckCircle, XCircle } from 'lucide-react';
import './admin.css';
import { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="container admin-layout">
      <aside className="admin-sidebar glass card">
        <h2 style={{color: '#D94625', marginBottom: '2rem'}}>Admin Portal</h2>
        <nav className="dashboard-nav" style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <button className={`nav-item ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')} style={{width: '100%', background: activeTab === 'users' ? 'rgba(249, 115, 22, 0.1)' : 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '1rem'}}>
            <Users size={20}/> Quản lý Người dùng
          </button>
          <button className={`nav-item ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => setActiveTab('posts')} style={{width: '100%', background: activeTab === 'posts' ? 'rgba(249, 115, 22, 0.1)' : 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '1rem'}}>
            <FileText size={20}/> Duyệt Bài đăng mới
          </button>
          <button className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')} style={{width: '100%', background: activeTab === 'reports' ? 'rgba(249, 115, 22, 0.1)' : 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '1rem'}}>
            <AlertTriangle size={20}/> Báo cáo & Cờ lọc
          </button>
        </nav>
      </aside>
      
      <main className="admin-main card glass">
        {activeTab === 'posts' && (
          <div>
            <h2 style={{color: '#D94625', marginBottom: '1.5rem'}}>Duyệt bài đăng (Hàng chờ: 2)</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {/* Post Item */}
              <div style={{border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', background: 'white'}}>
                <div className="flex-between" style={{marginBottom: '1rem'}}>
                  <span className="badge badge-student">Bài của Học sinh</span>
                  <span className="text-muted">Đăng 5 phút trước</span>
                </div>
                <h3 style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>Tìm gia sư luyện thi Toeic mục tiêu 750+</h3>
                <p style={{color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5}}>
                  "Cần tìm giáo viên giỏi tiếng anh, mình học rất kém..."
                </p>
                <div style={{display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '0.9rem', flexWrap: 'wrap'}}>
                  <span style={{background: 'rgba(0,0,0,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem'}}>Môn: Tiếng Anh</span>
                  <span style={{background: 'rgba(0,0,0,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem'}}>Lương: 300k/buổi</span>
                  <span style={{background: 'rgba(0,0,0,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem'}}>Khu vực: Hà Nội</span>
                </div>
                <div className="flex-center" style={{gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', justifyContent: 'flex-start'}}>
                  <button className="btn btn-primary flex-center" style={{gap: '0.5rem', background: '#10B981'}}><CheckCircle size={18} /> Phê duyệt (Công khai)</button>
                  <button className="btn btn-outline flex-center" style={{gap: '0.5rem', color: '#DC2626', borderColor: '#DC2626'}}><XCircle size={18} /> Từ chối & Góp ý</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div>
            <h2 style={{color: '#D94625', marginBottom: '1.5rem'}}>Hệ thống Cảnh báo tự động & User Report</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem'}}>
                <div className="flex-between">
                  <span className="badge badge-restricted">Banned Word Filter</span>
                  <span className="text-muted" style={{fontSize: '0.85rem'}}>10 phút trước</span>
                </div>
                <p style={{marginTop: '0.5rem', fontWeight: 600}}>Bình luận vi phạm từ user: <span style={{color: 'var(--primary)'}}>HieuThứ3</span></p>
                <p style={{marginTop: '0.5rem', color: 'var(--text-main)', fontStyle: 'italic', background: 'white', padding: '0.5rem', borderRadius: '4px'}}>
                  "Giáo viên gì mà dạy *** quá vây..."
                </p>
                <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem'}}>
                  <button className="btn btn-outline" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Ẩn/Xóa bình luận</button>
                  <button className="btn btn-outline text-danger" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Ban tài khoản</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
           <h2 style={{color: '#D94625', marginBottom: '1.5rem'}}>Quản lý Người dùng</h2>
           /* Giữ nguyên logic Users nếu cần, tuy nhiên vì là mock nên ta chỉ hiển thị title */
        )}
      </main>
    </div>
  );
}
