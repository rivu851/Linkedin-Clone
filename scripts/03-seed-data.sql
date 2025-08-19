-- Sample data for development
INSERT INTO users (email, password_hash, first_name, last_name, headline, summary, location) VALUES
('john.doe@example.com', '$2b$10$example_hash', 'John', 'Doe', 'Software Engineer at Tech Corp', 'Passionate software engineer with 5+ years of experience in full-stack development.', 'San Francisco, CA'),
('jane.smith@example.com', '$2b$10$example_hash', 'Jane', 'Smith', 'Product Manager | AI Enthusiast', 'Product manager focused on AI-driven solutions and user experience.', 'New York, NY'),
('mike.johnson@example.com', '$2b$10$example_hash', 'Mike', 'Johnson', 'Senior Developer | React Expert', 'Senior developer specializing in React and modern web technologies.', 'Austin, TX'),
('sarah.wilson@example.com', '$2b$10$example_hash', 'Sarah', 'Wilson', 'UX Designer | Design Systems', 'UX designer passionate about creating intuitive and accessible user experiences.', 'Seattle, WA');

-- Sample posts
INSERT INTO posts (user_id, content) VALUES
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Excited to share that I just completed a new project using Next.js and TypeScript! The developer experience has been amazing. #webdev #nextjs'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Just attended an incredible AI conference. The future of product development is going to be fascinating! #AI #ProductManagement'),
((SELECT id FROM users WHERE email = 'mike.johnson@example.com'), 'Working on a new React component library. Clean, reusable components are the key to scalable applications. #React #ComponentLibrary'),
((SELECT id FROM users WHERE email = 'sarah.wilson@example.com'), 'Design systems are not just about components - they are about creating a shared language between design and development teams. #DesignSystems #UX');

-- Sample connections
INSERT INTO connections (requester_id, addressee_id, status) VALUES
((SELECT id FROM users WHERE email = 'john.doe@example.com'), (SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'accepted'),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), (SELECT id FROM users WHERE email = 'mike.johnson@example.com'), 'accepted'),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), (SELECT id FROM users WHERE email = 'sarah.wilson@example.com'), 'accepted');

-- Sample skills
INSERT INTO skills (user_id, skill_name, endorsements_count) VALUES
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'JavaScript', 15),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'React', 12),
((SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Node.js', 8),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Product Management', 20),
((SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Agile', 18),
((SELECT id FROM users WHERE email = 'mike.johnson@example.com'), 'React', 25),
((SELECT id FROM users WHERE email = 'mike.johnson@example.com'), 'TypeScript', 22),
((SELECT id FROM users WHERE email = 'sarah.wilson@example.com'), 'UX Design', 30),
((SELECT id FROM users WHERE email = 'sarah.wilson@example.com'), 'Figma', 25);
