"use client";
import { PlusCircle, Search, Edit3, Trash2, Eye, UserCheck, XCircle } from 'lucide-react';
import './posts.css';
import { useState } from 'react';
import ComboBox from '@/components/common/ComboBox';

export default function StudentPosts() {
  const [showModal, setShowModal] = useState(false);
  const [showApplicantsModal, setShowApplicantsModal] = useState(false);

  return (
    <div className="container posts-container">
      <div className="page-header flex-between">
        <div>
          <h1 style={{color: '#D94625', marginBottom: '0.5rem'}}>Quản lý Bài đăng tìm Gia sư</h1>
          <p className="text-muted">Đăng yêu cầu lớp học của bạn để gia sư có thể dễ dàng ứng tuyển.</p>
        </div>
        <button className="btn btn-primary flex-center" style={{gap: '0.5rem'}} onClick={() => setShowModal(true)}>
          <PlusCircle size={20} /> Tạo bài đăng mới
        </button>
      </div>

      <div className="card glass">
        <div className="flex-between" style={{marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem'}}>
          <div className="tab-navigation">
            <button className="tab-btn active">Tất cả (3)</button>
            <button className="tab-btn">Đang tìm (2)</button>
            <button className="tab-btn">Đã đủ người (1)</button>
            <button className="tab-btn text-muted">Chờ duyệt (0)</button>
          </div>
          <div className="search-input-wrapper" style={{background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', width: '250px'}}>
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Tìm kiếm bài đăng..." style={{border: 'none', outline: 'none', width: '100%', fontSize: '0.9rem'}} />
          </div>
        </div>

        <div className="posts-list">
          {/* Post Item 1 */}
          <div className="post-item">
            <div className="post-header flex-between">
              <div>
                <span className="badge badge-active">Đang tìm gia sư</span>
                <h3 className="post-title" style={{marginTop: '0.5rem', color: 'var(--text-main)'}}>Tìm gia sư Tiếng Anh giao tiếp cho người đi làm</h3>
              </div>
              <div className="post-actions">
                <button className="btn-icon" title="Xem chi tiết"><Eye size={18} /></button>
                <button className="btn-icon" title="Sửa bài"><Edit3 size={18} /></button>
                <button className="btn-icon text-danger" title="Xóa bài"><Trash2 size={18} /></button>
              </div>
            </div>
            
            <div className="post-details" style={{display: 'flex', gap: '1.5rem', margin: '1rem 0', color: 'var(--text-muted)', fontSize: '0.95rem'}}>
              <span><strong>Môn học:</strong> Tiếng Anh</span>
              <span><strong>Mức lương:</strong> 250.000đ/buổi</span>
              <span><strong>Hình thức:</strong> Học Online</span>
            </div>
            
            <div className="post-footer flex-between" style={{borderTop: '1px solid rgba(253, 186, 116, 0.3)', paddingTop: '1rem'}}>
              <span className="text-muted">Đăng 2 ngày trước</span>
              <button className="btn btn-outline flex-center" style={{gap: '0.5rem'}} onClick={() => setShowApplicantsModal(true)}>
                <UserCheck size={18} /> Xem danh sách Ứng tuyển (5 người)
              </button>
            </div>
          </div>

          {/* Post Item 2 */}
          <div className="post-item">
            <div className="post-header flex-between">
              <div>
                <span className="badge" style={{background: 'rgba(0,0,0,0.05)', color: 'var(--text-muted)'}}>Đã đủ người</span>
                <h3 className="post-title" style={{marginTop: '0.5rem', color: 'var(--text-main)'}}>Tìm gia sư Toán lớp 10 luyện thi Học sinh giỏi</h3>
              </div>
            </div>
            
            <div className="post-details" style={{display: 'flex', gap: '1.5rem', margin: '1rem 0', color: 'var(--text-muted)', fontSize: '0.95rem'}}>
              <span><strong>Môn học:</strong> Toán học</span>
              <span><strong>Mức lương:</strong> 200.000đ/buổi</span>
              <span><strong>Hình thức:</strong> Học Offline (Quận 1, TP.HCM)</span>
            </div>
            
            <div className="post-footer flex-between" style={{borderTop: '1px solid rgba(253, 186, 116, 0.3)', paddingTop: '1rem'}}>
              <span className="text-muted">Đăng 1 tuần trước</span>
              <span style={{color: '#10B981', fontWeight: 600}}>Đã chọn gia sư: Nguyễn Văn A</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Tạo Bài Đăng Mới */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content card">
            <div className="modal-header flex-between">
              <h2 style={{color: '#D94625'}}>Tạo bài đăng tìm Gia sư</h2>
              <button className="btn-icon" onClick={() => setShowModal(false)}><XCircle size={24} /></button>
            </div>
            <form className="modal-body">
              <div className="form-group">
                <label>Tiêu đề bài đăng</label>
                <input type="text" className="input-field" placeholder="Ví dụ: Tìm gia sư Toán lớp 10..." />
              </div>
              <div className="form-grid">
                <ComboBox label="Môn học" placeholder="Chọn môn học..." options={["Toán học", "Tiếng Anh", "Vật lý", "Hóa học", "Ngữ văn"]} />
                <ComboBox label="Hình thức học" placeholder="Chọn hình thức..." options={["Online", "Offline (Tại nhà)"]} />
              </div>
              <div className="form-group">
                <label>Học phí dự kiến (VNĐ/buổi)</label>
                <input type="number" className="input-field" placeholder="Ví dụ: 150000" />
              </div>
              <div className="form-group">
                <label>Yêu cầu thêm đối với Gia sư</label>
                <textarea className="input-field" rows={4} placeholder="Ví dụ: Cần gia sư là sinh viên năm 3 trở lên, có kinh nghiệm..." style={{resize: 'vertical'}}></textarea>
              </div>
              <div className="flex-center" style={{justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem'}}>
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Hủy bỏ</button>
                <button type="button" className="btn btn-primary">Đăng bài (Chờ duyệt)</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Danh sách Ứng tuyển */}
      {showApplicantsModal && (
        <div className="modal-overlay">
          <div className="modal-content card">
            <div className="modal-header flex-between">
              <h2 style={{color: '#D94625'}}>Gia sư đang ứng tuyển (5)</h2>
              <button className="btn-icon" onClick={() => setShowApplicantsModal(false)}><XCircle size={24} /></button>
            </div>
            <div className="modal-body" style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              
              <div className="flex-between" style={{padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)'}}>
                <div className="flex-center" style={{gap: '1rem'}}>
                  <div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>N</div>
                  <div>
                    <h4 style={{marginBottom: '0.25rem', color: 'var(--text-main)'}}>Nguyễn Văn A</h4>
                    <p className="text-muted" style={{fontSize: '0.85rem'}}>Sinh viên năm 3 - ĐH Bách Khoa TP.HCM</p>
                  </div>
                </div>
                <div className="flex-center" style={{gap: '0.5rem'}}>
                  <a href="/tutors/123" target="_blank" className="btn btn-outline" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem', textDecoration: 'none'}}>Xem Profile</a>
                  <button className="btn btn-primary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Chọn Gia sư này</button>
                </div>
              </div>

              <div className="flex-between" style={{padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)'}}>
                <div className="flex-center" style={{gap: '1rem'}}>
                  <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#14B8A6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>T</div>
                  <div>
                    <h4 style={{marginBottom: '0.25rem', color: 'var(--text-main)'}}>Trần Thị B</h4>
                    <p className="text-muted" style={{fontSize: '0.85rem'}}>Giáo viên tự do - IELTS 8.0</p>
                  </div>
                </div>
                <div className="flex-center" style={{gap: '0.5rem'}}>
                  <a href="/tutors/123" target="_blank" className="btn btn-outline" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem', textDecoration: 'none'}}>Xem Profile</a>
                  <button className="btn btn-primary" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>Chọn Gia sư này</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
