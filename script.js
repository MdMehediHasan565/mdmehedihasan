:root {
    --primary: #2E5BFF;
    --secondary: #00C9FF;
    --dark: #0F172A;
    --darker: #0A0F1C;
    --light: #F8FAFC;
    --gray: #64748B;
    --radius: 16px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
    color: var(--light);
    overflow-x: hidden;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.navbar {
    position: fixed; width: 100%; background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px); z-index: 1000; padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container { display: flex; justify-content: space-between; align-items: center; }

.logo { text-decoration: none; color: white; font-weight: 800; font-size: 1.5rem; display: flex; align-items: center; gap: 10px; }

.nav-links { display: flex; list-style: none; gap: 30px; }

.nav-links a { color: var(--light); text-decoration: none; transition: var(--transition); }

.nav-links a:hover { color: var(--primary); }

.hero { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; }

.hero-content { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }

h1 { font-size: 3.5rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; color: transparent; }

.profile-card {
    background: rgba(255, 255, 255, 0.05); padding: 40px; border-radius: var(--radius);
    border: 1px solid rgba(255, 255, 255, 0.1); text-align: center;
}

.profile-image {
    width: 150px; height: 150px; background: var(--primary); border-radius: 50%;
    margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 3rem;
}

.btn {
    padding: 12px 25px; border-radius: 8px; border: none; cursor: pointer;
    font-weight: 600; transition: var(--transition); text-decoration: none; display: inline-block;
}

.btn-primary { background: var(--primary); color: white; }

.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(46, 91, 255, 0.3); }

.fade-in { opacity: 0; transform: translateY(20px); transition: 0.8s all ease-out; }

.fade-in.visible { opacity: 1; transform: translateY(0); }

.scanner {
    position: fixed; top: 0; left: 0; width: 100%; height: 3px;
    background: var(--primary); z-index: 2000; animation: scan 4s linear infinite;
    box-shadow: 0 0 15px var(--primary);
}

@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }

@media (max-width: 768px) {
    .hero-content { grid-template-columns: 1fr; text-align: center; }
    .nav-links { display: none; }
}