/**
 * Created by zengruda on 10/21/16.
 */
class Router{
    constructor(routeMap){
        this.routeMap = routeMap;
    };
    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.navItems.map((item) => {
                            return (
                                <li>
                                    <a href="javascript:;" onClick={_this.route.bind(_this, item)}>
                                        {router[item].name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>{content}</div>
            </div>
        );
    }
}
