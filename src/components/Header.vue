<template>
  <header class="top-header hidden-xs">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <ul class="list-inline">
                     <li >
                        <a href="javascript:;" style="margin-right: 10px;">VI</a> 
                        <a href="javascript:;">|</a> |
                        <a href="javascript:;">EN</a>
                    </li>
                    <li>
                        <a :href="`tel:${headerConfig.phoneNumber}`"><i class="fa fa-phone pr-5 pl-10"></i>{{headerConfig.phoneNumber}}</a>
                    </li>
                    <li>
                        <a :href="`mailto:${headerConfig.email}`">
                            <i class="fa fa-envelope-o pr-5 pl-10"></i>{{headerConfig.email}}
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="top-buttons">
                    <a href="javascript:;" class="btn btn-default btn-sm text-uppercase"><i class="fa fa-bell pr-10"></i> {{$t('registerToBuyNewCard')}}</a>
                    <a href="/dang-ky-ban-xe" class="btn btn-danger btn-sm text-uppercase"><i class="fa fa-shopping-cart pr-10"></i> {{$t('registerSaleYourCar')}}</a>
                </div>
            </div>
        </div>
    </div>
</header>
</template>
<script>
export default {
  data() {
    return {
      headerConfig: require("../json/config.json")
    };
  }
};
</script>


