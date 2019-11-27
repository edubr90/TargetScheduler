﻿using System;
/// <summary>  
/// User's culture information.  
/// </summary>  
public class UserCultureInfo
{
    /// <summary>  
    /// Initializes a new instance of the <see cref="UserCultureInfo"/> class.  
    /// </summary>  
    public UserCultureInfo()
    {
        // TODO: Need to through DB Context.  
        TimeZone = TimeZoneInfo.Local;
        DateTimeFormat = "dd/mm/yyyy h:m:ss tt"; // Default format.  
    }
    /// <summary>  
    /// Gets or sets the date time format.  
    /// </summary>  
    /// <value>  
    /// The date time format.  
    /// </value>  
    public string DateTimeFormat { get; set; }
    /// <summary>  
    /// Gets or sets the time zone.  
    /// </summary>  
    /// <value>  
    /// The time zone.  
    /// </value>  
    public TimeZoneInfo TimeZone { get; set; }
    /// <summary>  
    /// Gets the user local time.  
    /// </summary>  
    /// <returns></returns>  
    public DateTime GetUserLocalTime()
    {
        return TimeZoneInfo.ConvertTime(DateTime.UtcNow, TimeZone);
    }
    /// <summary>  
    /// Gets the UTC time.  
    /// </summary>  
    /// <param name="datetime">The datetime.</param>  
    /// <returns>Get universal date time based on User's Timezone</returns>  
    public DateTime GetUtcTime(DateTime datetime)
    {
        return TimeZoneInfo.ConvertTime(datetime, TimeZone).ToUniversalTime();
    }
}