import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import './Home.css';
import '../components/grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

export default class Admin extends Component {
        constructor(props){
            super(props)
            const token = localStorage.getItem("token")

            let loggedIn = true
            if(token == null){
                loggedIn = false
            }

            this.state = {
                loggedIn
            }
        }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }
        return (
            <div>
                <header className ="nav">
            <ul className = "nav__list">
                <Link to="/home" className = "nav__item">Home</Link>
                <Link to="/" className = "nav__item">Product</Link>
                <Link to="/" className = "nav__item">Contact</Link>
                <Link to="/" className = "nav__item">About</Link>
                <Link to="/logout" className = "nav__logout">Logout</Link>
            </ul>
        </header>
        <div className = "container">
            <div className = "grid">
                <div className = "grid__row">
                <div className= "grid__column-2">
                    <div className = "category">
                        <div className= "category__heading" >
                        <FontAwesomeIcon className= "category__icon" icon={faList} />
                            Danh mục
                        </div>
                        <ul className = "category-list">
                            <li className = "category-item">
                                <Link className = "category-link" to="/"  >Chó</Link>
                            </li>
                            <li className = "category-item">
                                <Link className = "category-link" to="/">Mèo</Link>
                            </li>
                            <li className = "category-item">
                                <Link className = "category-link" to="/">Cá</Link>
                            </li>
                            <li className = "category-item">
                                <Link className = "category-link" to="/">Chim</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                 <div className = "grid__column-10 ">
                     <div className = "product">
                        <div className = "grid__row">
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://www.pngkey.com/png/detail/1-16476_golden-retriever-dog-png-free-dog-png.png")` }}></div>
                                <h4 className = "product-name">Chó Golden Châu Âu</h4>
                                <h5 className = "product-price">Giá bán :15.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div>     
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://tunglocpet.com/wp-content/uploads/2020/08/gia-cho-husky-fb-thumb.jpg")` }}></div>
                                <h4 className = "product-name">Chó Husky lai Anh Quốc</h4>
                                <h5 className = "product-price">Giá bán :5.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://i.pinimg.com/originals/19/2e/ae/192eae919cd5b915b6056e4f270803cd.jpg")` }}></div>
                                <h4 className = "product-name">Chó con Alaska lai Anh Quốc</h4>
                                <h5 className = "product-price">Giá bán :8.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg")` }}></div>
                                <h4 className = "product-name">Chó Pitbull từ Anh Quốc</h4>
                                <h5 className = "product-price">Giá bán :20.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://img2.thejournal.ie/article/5170458/river?version=5170546&width=1340")` }}></div>
                                <h4 className = "product-name">Chó Havanese từ Anh Quốc</h4>
                                <h5 className = "product-price">Giá bán :10.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://cdn.cnn.com/cnnnext/dam/assets/201030094143-stock-rhodesian-ridgeback-super-tease.jpg")` }}></div>
                                <h4 className = "product-name">Chó Săn Canada</h4>
                                <h5 className = "product-price">Giá bán :16.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://www.peta.org/wp-content/uploads/2017/11/iStock-805170532_absolutimages.jpg")` }}></div>
                                <h4 className = "product-name">Mèo Anh Quốc lông ngắn</h4>
                                <h5 className = "product-price">Giá bán :8.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://live-production.wcms.abc-cdn.net.au/3008bbfdcb613c7bc17f2684a60f632f?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=251&width=862&height=485")` }}></div>
                                <h4 className = "product-name">Mèo Anh Quốc lông dài</h4>
                                <h5 className = "product-price">Giá bán :9.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://keshdigital.com/wp-content/uploads/2020/11/79238215_2514248952156754_5997050858056869195_n.jpg")` }}></div>
                                <h4 className = "product-name">Mèo Chinchila</h4>
                                <h5 className = "product-price">Giá bán :10.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://i.redd.it/g023x0o7nv801.jpg")` }}></div>
                                <h4 className = "product-name">Mèo chân ngắn Munchkin</h4>
                                <h5 className = "product-price">Giá bán :9.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfUCx4A6ww-bVMwoZudkJmjkmMtssI6ZWlw&usqp=CAU")` }}></div>
                                <h4 className = "product-name">Mèo Anh Quốc lông dài</h4>
                                <h5 className = "product-price">Giá bán :12.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://i.redd.it/mb57gyen81u21.jpg")` }}></div>
                                <h4 className = "product-name">Mèo Himalaya lai chủng</h4>
                                <h5 className = "product-price">Giá bán :25.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div>   
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://excitedcats.com/wp-content/uploads/2021/01/Beautiful-persian-cream-colorpoint-cat-whith-blue-eyes_Dorottya-Mathe_shutterstock.jpg")` }}></div>
                                <h4 className = "product-name">Mèo Ba Tư Himalaya</h4>
                                <h5 className = "product-price">Giá bán :12.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://justbirding.com/wp-content/uploads/2018/12/bohemian-waxwing-Bombycilla-garrulus.jpg")` }}></div>
                                <h4 className = "product-name">Chim Chào Mào lai tạo</h4>
                                <h5 className = "product-price">Giá bán :1.000.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2MjQ2MjM2MjM4NjUzMzE5/facts-about-the-most-beautiful-birds-around-the-world-you-may-not-know.jpg")` }}></div>
                                <h4 className = "product-name">Chim Vẹt lai tạo</h4>
                                <h5 className = "product-price">Giá bán :500.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://i.pinimg.com/originals/3c/e4/19/3ce419d37827193e8ac9e86beb160c47.jpg")` }}></div>
                                <h4 className = "product-name">Chim đẹp hoang dã</h4>
                                <h5 className = "product-price">Giá bán :15.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://i.ytimg.com/vi/enXCNO-tDaA/maxresdefault.jpg")` }}></div>
                                <h4 className = "product-name">Cá Cảnh lai tạo</h4>
                                <h5 className = "product-price">Giá bán :10.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("data:image/jpeg;base64,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")` }}></div>
                                <h4 className = "product-name">Cá Cảnh lai tạo</h4>
                                <h5 className = "product-price">Giá bán :2.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://previews.123rf.com/images/mozzyb/mozzyb0810/mozzyb081000015/3720102-beautiful-sea-fish-on-atoll.jpg")` }}></div>
                                <h4 className = "product-name">Cá Cảnh nước mặn</h4>
                                <h5 className = "product-price">Giá bán :10.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                        <div className = "grid__column-2-4">
                            <div className = "product-item">
                                <div className = "product-item__img" style = {{backgroundImage: `url("https://previews.123rf.com/images/subinpumsom/subinpumsom1812/subinpumsom181200033/115529732-siamese-betta-fish-beautiful-color-on-black-background.jpg")` }}></div>
                                <h4 className = "product-name">Cá cảnh lai tạo</h4>
                                <h5 className = "product-price">Giá bán :5.000.000đ</h5>
                                <Link className = "product-seen" to= "/">Xem Ngay</Link>
                            </div>
                        </div> 
                   </div>
                   </div>
               </div>
            </div>
        </div>  
        </div>
        <div className= "footer grid__full">
            <div className = "footer-item grid__row">
                <div className = "grid__column-4 footer-link">
                    <p>Gmail: Nguyenxuandung711@gmail.com</p>
                    <br/>
                    <p>Number Phone: 0901174784</p>
                    <br/>
                    <p>Address: 144/28 Nguyễn Lương Bằng</p>
                    <br/>
                </div>
                <div className = "grid__column-4 footer-link">
                    <p> @ Nguyễn Xuân Dũng 2021 </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className = "grid__column-4 footer-link">
                <p>Gmail: Nguyenxuandung711@gmail.com</p>
                    <br/>
                    <p>Number Phone: 0901174784</p>
                    <br/>
                    <p>Address: 144/28 Nguyễn Lương Bằng</p>
                    <br/>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
