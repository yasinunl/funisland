import React from 'react';

const Blog = () => {
  const recentPosts = [
      {
          id: 1,
          title: "Yeni Başlayanlar için Strateji Oyunları Rehberi",
          excerpt: "Strateji oyunları oynamaya mı meraklısınız? Bu rehberde, yeni başlayanlar için faydalı ipuçları, popüler strateji oyunları önerileri ve oyun içi stratejiler bulacaksınız. Oyun dünyasına adım atın ve strateji yeteneklerinizi geliştirin!",
      },
      {
          id: 2,
          title: "Oyunlarda Grafiklerin Önemi: Göz Alıcı Görseller mi Yoksa Oyun Mekaniği mi?",
          excerpt: "Son zamanlarda oyunlarda grafiklerin giderek daha fazla önem kazandığını görüyoruz. Fakat gerçekten harika bir oyun deneyimi için sadece çarpıcı grafikler yeterli mi? Bu blog yazısında, grafiklerin oyun deneyimindeki rolünü ve oyun mekaniğinin önemini tartışacağız.",
      },
      {
          id: 3,
          title: "E-spor: Profesyonel Oyunculuk Dünyası",
          excerpt: "E-spor, elektronik sporlar anlamına gelir ve profesyonel olarak video oyunu oynayan oyuncuları kapsar. E-spor son yıllarda inanılmaz bir büyüme yaşadı ve artık milyar dolarlık bir endüstri haline geldi. Bu blog yazısında, e-sporun tarihçesinden, popüler e-spor oyunlarına ve profesyonel oyuncuların hayatlarına kadar çeşitli konuları inceleyeceğiz.",
      },
  ];
  return (
    <div className="blog-page">
      <h1>Welcome to the Blog!</h1>
      <p>This is where you'll find all the latest articles, news, and insights on a variety of topics.</p>

      {/* Replace with your actual blog posts */}
      <section className="recent-posts">
                <h2>Son Blog Yazıları</h2>
                <ul>
                    {recentPosts.map((post) => (
                        <li key={post.id}>
                                <h4>{post.title}</h4>
                                <p>{post.excerpt}</p>
                        </li>
                    ))}
                </ul>
            </section>

      {/* Add a form for users to subscribe to the blog (optional) */}
      <h2>Subscribe to the Blog</h2>
      <form action="#">
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Blog;
