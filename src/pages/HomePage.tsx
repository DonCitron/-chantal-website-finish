import React from 'react';

const HomePage: React.FC = () => (
  <div style={{ maxWidth: 700, margin: '40px auto', padding: 24 }}>
    <img
      src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&w=700"
      alt="Self-care spa flat lay"
      style={{ width: '100%', borderRadius: 12, marginBottom: 24, maxHeight: 300, objectFit: 'cover' }}
    />
    <h1>Welcome to Self-Care Journey</h1>
    <p>
      Discover a transformative path to well-being with our Self-Care Journey book and course. Whether you're looking to build healthy habits, reduce stress, or deepen your self-understanding, our resources are designed to support your personal growth every step of the way.
    </p>
    <ul style={{ margin: '24px 0', paddingLeft: 20 }}>
      <li>✔️ Practical self-care strategies you can use every day</li>
      <li>✔️ Guided exercises and reflections</li>
      <li>✔️ Supportive community and premium content for members</li>
      <li>✔️ Flexible learning: read the book, take the course, or both!</li>
    </ul>
                  <img 
      src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80"
      alt="Peaceful nature placeholder"
      style={{ width: '100%', borderRadius: 12, margin: '24px 0', maxHeight: 300, objectFit: 'cover' }}
    />
    <p>
      <strong>Start your journey today:</strong>
            </p>
    <ul style={{ margin: '16px 0', paddingLeft: 20 }}>
      <li><a href="/course">Explore the Course</a></li>
      <li><a href="/book">Learn about the Book</a></li>
      <li><a href="/premium">Unlock Premium Content</a></li>
    </ul>
        </div>
  );

export default HomePage;