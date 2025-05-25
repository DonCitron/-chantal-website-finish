import React from 'react';

interface FileCardProps {
  file: File;
}

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: 10, borderRadius: 5, width: 150, textAlign: 'left' }}>
      <p style={{ fontWeight: 'bold', marginBottom: 5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</p>
      <p style={{ fontSize: 12, color: '#666' }}>{file.type || 'Unbekannter Typ'}</p>
      <p style={{ fontSize: 12, color: '#666' }}>{(file.size / 1024).toFixed(2)} KB</p>
      {/* Weitere Details oder Aktionen hier */}
    </div>
  );
};

export default FileCard;