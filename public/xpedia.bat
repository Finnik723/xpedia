@echo off
setlocal
CHCP 65001 >NUL

set mod_name=XComFiles
set language_name=en-US
set language_name1=ru
set language_name2=pl


set mod_rules_path=user\mods\%mod_name%\Ruleset
set mod_language_path=user\mods\%mod_name%\Language\%language_name%.yml
set mod_language_path1=user\mods\%mod_name%\Language\%language_name1%.yml
set mod_language_path2=user\mods\%mod_name%\Language\%language_name2%.yml

set vanilla_rules_path=standard\xcom1
set vanilla_language_path=standard\xcom1\Language\%language_name%.yml
set vanilla_language_path1=standard\xcom1\Language\%language_name1%.yml
set vanilla_language_path2=standard\xcom1\Language\%language_name2%.yml
set tech_rules_path=common
set tech_language_path=common\Language\Technical\%language_name%.yml
set tech_language_path1=common\Language\Technical\%language_name1%.yml
set tech_language_path2=common\Language\Technical\%language_name2%.yml
rem set xpedia_language_path=xpedia\Language\%language_name%.yml
set xpedia_language_path1=xpedia\Language\%language_name1%.yml
set xpedia_language_path2=xpedia\Language\%language_name2%.yml
set pedia_header=xpedia\xpedia.html.header

>index.html (
	type %pedia_header%
	
	echo FILE: xpedia
	echo {modName: %mod_name%}

	for /r %vanilla_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	for /r %mod_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	echo FILE: Language
	
	echo | set /p langTag=langv-
	type "%vanilla_language_path%"
	
	echo | set /p langTag=langm-
	type "%mod_language_path%"

	echo | set /p langTag=langt-
	type "%tech_language_path%"

	rem echo | set /p langTag=langp-
	rem type "%xpedia_language_path%"	
)



>xpedia_ru.html (
	type %pedia_header%
	
	echo FILE: xpedia
	echo {modName: %mod_name%}

	for /r %vanilla_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	for /r %mod_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	echo FILE: Language
	
	echo | set /p langTag=langv-
	type "%vanilla_language_path1%"
	
	echo | set /p langTag=langm-
	type "%mod_language_path1%"

	echo | set /p langTag=langp-
	type "%xpedia_language_path1%"	

	echo | set /p langTag=langt-
	type "%tech_language_path1%"
)


>xpedia_pl.html (
	type %pedia_header%
	
	echo FILE: xpedia
	echo {modName: %mod_name%}

	for /r %vanilla_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	for /r %mod_rules_path% %%F in (*.rul) do (
		echo FILE: %%F
		type "%%F"
		echo.
	)
	
	echo FILE: Language
	
	echo | set /p langTag=langv-
	type "%vanilla_language_path2%"
	
	echo | set /p langTag=langm-
	type "%mod_language_path2%"

	echo | set /p langTag=langp-
	type "%xpedia_language_path2%"		

	echo | set /p langTag=langt-
	type "%tech_language_path2%"
)
