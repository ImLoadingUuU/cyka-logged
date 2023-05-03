<html>
    <head>
        <title>Admin Control</title>
    </head>
    <body>
    <div class="card" style="max-width: 490px">
                        <div class="header">
                            <h2>
                                Admin Control <small>Modify Your Settings</small>
                            </h2>
                          
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">more_vert</i>
                                    </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                        <?php if (config("system.amp.password") == "admin") { ?>
                                    <div class="alert alert-warning">
                                        <strong>Warning!</strong> Please Change Your Admin Panel Password
                                    </div>
                            <?php } ?>

                        
                         
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs tab-nav-right" role="tablist"  >
                            <li role="presentation" class="active"><a href="#basic" data-toggle="tab" aria-expanded="false">Basic</a></li>
                                <?php
                                $items = config("system");
                                foreach ($items as $key => $value) {
                                    $formattedString = ucwords(str_replace("_", " ", $key));
                                    if (is_array($value)) {
                                        echo '<li role="presentation" class=""><a href="#' . $key . '" data-toggle="tab" aria-expanded="false">' . $formattedString . '</a></li>';
                                    }
                                }
                                ?>
                               
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade active in" id="basic">
                                    <b>Basic Configuration</b>
                                    <p>
                                    <?php
                                    $items = config("system");
                                    foreach ($items as $key => $value) {
                                        $formattedString = ucwords(str_replace("_", " ", $key));
                                        if (is_string($value)) {
                                            ?>
                                                <div class="form-group form-float">
                                                <div class="form-line">
                                                    <input type="text" class="form-control"  value="<?php echo $value ?>" >
                                                    <label class="form-label"> <?php echo $formattedString ?></label>
                                                </div>
                                            </div>
                                                <?php
                                        }
                                    }
                                    ?>
                                    </p>
                                </div>
                                 <div role="tabpanel" class="tab-pane fade active in" id="basic">
                                    <b>Basic Configuration</b>
                                    <p>
                                    <?php
                                    $items = config("system");
                                    foreach ($items as $key => $value) {
                                        $formattedString = ucwords(str_replace("_", " ", $key));
                                        if (is_string($value)) {
                                            ?>
                                                <div class="form-group form-float">
                                                <div class="form-line">
                                                    <input type="text" class="form-control"  value="<?php echo $value ?>" >
                                                    <label class="form-label"> <?php echo $formattedString ?></label>
                                                </div>
                                            </div>
                                                <?php
                                        }
                                    }
                                    ?>
                                    </p>
                                </div>
                                
                            </div>
                    
                        </div>
                    </div>
    </body>
</html>