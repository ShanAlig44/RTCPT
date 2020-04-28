<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Railtel | Channel Partner	</title>

<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
<script src="app/ViewModels/channel-partner/Controller.js"></script>
<script src="app/ViewModels/channel-partner/Service.js"></script>
<script src="app/constant.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	

  <!-- Bootstrap core CSS -->

  <link href="css/bootstrap.min.css" rel="stylesheet">

  <link href="fonts/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/animate.min.css" rel="stylesheet">

  <!-- Custom styling plus plugins -->
  <link href="css/custom.css" rel="stylesheet">
  <link href="css/icheck/flat/green.css" rel="stylesheet">


  <script src="js/jquery.min.js"></script>

  <!--[if lt IE 9]>
        <script src="../assets/js/ie8-responsive-file-warning.js"></script>
        <![endif]-->

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

</head>


<body class="nav-md">

  <div class="container body" ng-app="channelPartnerApp"  ng-controller="channelPartnerCtrl">


    <div class="main_container">

      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">

          <div class="navbar nav_title" style="border: 0;">
            <a href="dashboard" class="site_title"><i class="fa fa-paw"></i> <span>Railtel Corporation</span></a>
          </div>
          <div class="clearfix"></div>


          <!-- menu prile quick info -->
          <div class="profile">
            <div class="profile_pic">
              <img src="images/rail.png" alt="..." class="img-circle profile_img">
            </div>
            <div class="profile_info">
              <span>Welcome,</span>
              <h2>RCPL</h2>
            </div>
          </div>
          <!-- /menu prile quick info -->

          <br />

        <!-- sidebar menu -->
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">

            <div class="menu_section">
              <h3>Dashboard</h3>
              <ul class="nav side-menu">
                <li><a><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu" style="display: none">
                    <li><a href="dashboard">Dashboard</a>
                    </li>
                   
                  </ul>
                </li>
              <li><a><i class="fa fa-edit"></i> Forms <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu" style="display: none">
                 
                  <li><a href="company">Company</a></li>
                    <li><a href="channel_partner">Channel Partner</a></li>
                  </ul>
                </li>
                  <li><a><i class="fa fa-table"></i> Tables <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu" style="display: none">
                  
                	 <li><a href="list-company">Company List</a></li>
                 
                    <li><a href="channel-partner-list">Channel Partner List</a>
                    </li>
                  </ul>
                </li>
                <li><a><i class="fa fa-bar-chart-o"></i> Data Presentation <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu" style="display: none">
                    <li><a href="chartjs.html">Chart JS</a>
                    </li>
                    <li><a href="#">Chart JS2</a>
                    </li>
                    <li><a href="#">Moris JS</a>
                    </li>
                    <li><a href="#">ECharts </a>
                    </li>
                    <li><a href="#">Other Charts </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
           
          </div>
          <!-- /sidebar menu -->
     
          <!-- /menu footer buttons -->
          <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout">
              <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
          <!-- /menu footer buttons -->
        </div>
      </div>

      <!-- top navigation -->
      <div class="top_nav">

        <div class="nav_menu">
          <nav class="" role="navigation">
            <div class="nav toggle">
              <a id="menu_toggle"><i class="fa fa-bars"></i></a>
            </div>

            <ul class="nav navbar-nav navbar-right">
              <li class="">
                <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="images/rail.png" alt="">RCPL
                  <span class=" fa fa-angle-down"></span>
                </a>
                <ul class="dropdown-menu dropdown-usermenu animated fadeInDown pull-right">
                  <li><a href="javascript:;">  Profile</a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span class="badge bg-red pull-right">50%</span>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">Help</a>
                  </li>
                  <li><a href="logout"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                  </li>
                </ul>
              </li>

              <li role="presentation" class="dropdown">
                <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-envelope-o"></i>
                  <span class="badge bg-green">6</span>
                </a>
                <ul id="menu1" class="dropdown-menu list-unstyled msg_list animated fadeInDown" role="menu">
                  <li>
                    <a>
                      <span class="image">
                                        <img src="images/rail.png" alt="Profile Image" />
                                    </span>
                      <span>
                                        <span>RCPL</span>
                      <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="image">
                                        <img src="images/rail.png" alt="Profile Image" />
                                    </span>
                      <span>
                                        <span>RCPL</span>
                      <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="image">
                                        <img src="images/rail.png" alt="Profile Image" />
                                    </span>
                      <span>
                                        <span>RCPL</span>
                      <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="image">
                                        <img src="images/rail.png" alt="Profile Image" />
                                    </span>
                      <span>
                                        <span>RCPL</span>
                      <span class="time">3 mins ago</span>
                      </span>
                      <span class="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                    </span>
                    </a>
                  </li>
                  <li>
                    <div class="text-center">
                      <a>
                        <strong>See All Alerts</strong>
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
        </div>

      </div>
      <!-- /top navigation -->

      <!-- page content -->
      <div class="right_col" role="main">

        <div class="">
          
          <div class="clearfix"></div>

          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="x_panel">
                <div class="x_title">
                  <h2>Company <small>form</small></h2>
                  <ul class="nav navbar-right panel_toolbox">
                    
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">

                  <form class="form-horizontal form-label-left" novalidate>

                    
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Region <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                      
                       <select ng-model="region" class="form-control" ng-change="cmpByRegion(region)">
													<option value="">--Select Region --</option>
													<option ng-repeat="i in regions"
														value="{{i.name}}">{{i.name}}</option>
												</select>
                      </div>
                    </div>
                    
                     
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Company <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                      
                       <select ng-model="cmp" class="form-control" ng-change="cmpData(cmp)">
													<option value="">--Select Company --</option>
													<option ng-repeat="i in companies"
														value="{{i.id}}">{{i.name}}</option>
												</select>
                      </div>
                    </div>
                    
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Name <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="name" class="form-control col-md-7 col-xs-12" name="name" ng-model="name" required="required" type="text">
                      </div>
                    </div>
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Concerned Executive <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="concerned_executive" name="concerned_executive" ng-model="concernedExecutive" required="required" class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                   
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Contact Number <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="contact_number" name="contact_number" ng-model="contactNumber" required="required"  class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="website">Email<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="email" id="email" name="email" required="required"  ng-model="email" placeholder="xyz@domain.com" class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                     <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="textarea">Address <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <textarea id="textarea" required="required" name="address" ng-model="address" class="form-control col-md-7 col-xs-12"></textarea>
                      </div>
                    </div>
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="occupation">Tender No. <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="tender_number" type="text" name="tender_number" ng-model="tenderNumber"  class="optional form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="item form-group">
                      <label for="password" class="control-label col-md-3">PBG Amount</label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="pbg_amount" type="text" name="pbg_amount"  ng-model="pbgAmount" class="form-control col-md-7 col-xs-12" required="required">
                      </div>
                    </div>
                    
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="textarea">PBG Issuing Bank <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <textarea id="pbg_issuing_bank" required="required" ng-model="pbgIssueBank" name="pbg_issuing_bank" class="form-control col-md-7 col-xs-12"></textarea>
                      </div>
                    </div>
                    
                    <div class="item form-group">
                      <label for="password2" class="control-label col-md-3 col-sm-3 col-xs-12">PBG Number</label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input id="pbg_number" type="text" name="pbg_number" ng-model="pbgNumber" class="form-control col-md-7 col-xs-12" required="required">
                      </div>
                    </div>
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">PBG Issue Date <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="date" id="pbg_issue_date" name="pbg_issue_date" ng-model="pbgIssueDate" required="required"  class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">PBG Expiry Date <span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="date" id="pbg_expiry_date" name="pbg_expiry_date" ng-model="pbgExpireDate"  required="required"  class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">BG Ref No.<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="bg_ref_number" name="bg_ref_number" ng-model="bgRefNumber" required="required"  class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    
                    <div class="item form-group">
                      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">PO No.<span class="required">*</span>
                      </label>
                      <div class="col-md-6 col-sm-6 col-xs-12">
                        <input type="text" id="po_number" name="po_number" ng-model="poNumber" required="required"  class="form-control col-md-7 col-xs-12">
                      </div>
                    </div>
                    
                    
                   
                    <div class="ln_solid"></div>
                    <div class="form-group">
                      <div class="col-md-6 col-md-offset-3">
                        <!-- <button type="submit" class="btn btn-primary">Cancel</button> -->
                       <!--  <button id="send" type="submit" class="btn btn-success">Submit</button> -->
                      <!--  <a class="btn btn-default submit" ng-click=cmpSubmit()>Submit</a> -->
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- footer content -->
        <footer>
          <div class="copyright-info">
            <p class="pull-right">Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>  
            </p>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->

      </div>
      <!-- /page content -->
    </div>

  </div>

  <div id="custom_notifications" class="custom-notifications dsp_none">
    <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
    </ul>
    <div class="clearfix"></div>
    <div id="notif-group" class="tabbed_notifications"></div>
  </div>

  <script src="js/bootstrap.min.js"></script>

  <!-- bootstrap progress js -->
  <script src="js/progressbar/bootstrap-progressbar.min.js"></script>
  <script src="js/nicescroll/jquery.nicescroll.min.js"></script>
  <!-- icheck -->
  <script src="js/icheck/icheck.min.js"></script>
  <!-- pace -->
  <script src="js/pace/pace.min.js"></script>
  <script src="js/custom.js"></script>
  <!-- form validation -->
  <script src="js/validator/validator.js"></script>
  <script>
    // initialize the validator function
    validator.message['date'] = 'not a real date';

    // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
    $('form')
      .on('blur', 'input[required], input.optional, select.required', validator.checkField)
      .on('change', 'select.required', validator.checkField)
      .on('keypress', 'input[required][pattern]', validator.keypress);

    $('.multi.required')
      .on('keyup blur', 'input', function() {
        validator.checkField.apply($(this).siblings().last()[0]);
      });

    // bind the validation to the form submit event
    //$('#send').click('submit');//.prop('disabled', true);

    $('form').submit(function(e) {
      e.preventDefault();
      var submit = true;
      // evaluate the form using generic validaing
      if (!validator.checkAll($(this))) {
        submit = false;
      }

      if (submit)
        this.submit();
      return false;
    });

    /* FOR DEMO ONLY */
    $('#vfields').change(function() {
      $('form').toggleClass('mode2');
    }).prop('checked', false);

    $('#alerts').change(function() {
      validator.defaults.alerts = (this.checked) ? false : true;
      if (this.checked)
        $('form .alert').remove();
    }).prop('checked', false);
  </script>

</body>

</html>
