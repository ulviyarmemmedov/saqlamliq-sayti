 
       let cookieval=Cookies.get("cart");
       if(typeof cookieval!=="undefined" && cookieval!==""){
          cookieval= [...Cookies.get("cart").split("-")];
       }

        let prolist=cookieval ?? [];
       
       $(".cart").click(function(){


          let proid=$(this).attr("nese")
          prolist.push(proid);
           Cookies.set("cart",prolist.join("-"))
       })